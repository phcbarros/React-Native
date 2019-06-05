const bcrypt = require('bcrypt-nodejs')

module.exports = (app) => {
  const obterHash = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
    })
  }

  // const save = (req, res) => {
  //   obterHash(req.body.password, (hash) => {
  //     const password = hash

  //     app
  //       .db('users')
  //       .insert({ name: req.body.name, email: req.body.email, password })
  //       .then((_) => res.status(204).send())
  //       .catch((err) => res.status(500).json(err))
  //   })
  // }

  //usando async/await
  const save = async (req, res) => {
    await obterHash(req.body.password, async (hash) => {
      const password = hash
      try {
        await app
          .db('users')
          .insert({ name: req.body.name, email: req.body.email, password })
        res.status(204).send()
      } catch (err) {
        res.status(500).json(err)
      }
    })
  }

  return { save }
}

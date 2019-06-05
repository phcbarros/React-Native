const moment = require('moment')

const TABLE_TASKS = 'tasks'
module.exports = (app) => {
  const getTasks = (req, res) => {
    const date = req.query.date
      ? req.query.date
      : moment()
          .endOf('day')
          .toDate()

    app
      .db(TABLE_TASKS)
      .where({ userId: req.user.id })
      .where('estimateAt', '<=', date)
      .orderBy('estimateAt')
      .then((tasks) => res.json(tasks))
      .catch((err) => res.status(500).send(err))
  }

  const save = (req, res) => {
    if (!req.body.desc.trim()) {
      return res.status(400)
    }

    req.body.userId = req.user.id
    app
      .db(TABLE_TASKS)
      .insert(req.body)
      .then(() => res.status(204).send())
      .catch((err) => res.status(500).send(err))
  }

  const remove = (req, res) => {
    const { id } = req.params
    if (!id) {
      return res.status(400).send('Informe o id.')
    }

    if (isNaN(id)) {
      return res.status(400).send('O id informado é inválido.')
    }

    app
      .db(TABLE_TASKS)
      .del({ id, userId: req.user.id })
      .then((rowsDeleted) => {
        if (rowsDeleted > 0) {
          res.status(204).send()
        } else {
          res.status(400).send(`Não foi encontrada a taks com id ${id}`)
        }
      })
      .catch((err) => res.status(500).send(err))
  }

  return {
    getTasks,
    save,
    remove,
  }
}

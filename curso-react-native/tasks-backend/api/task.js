const moment = require('moment')

const TABLE_TASKS = 'tasks'
module.exports = (app) => {
  const getTasks = async (req, res) => {
    const date = req.query.date
      ? req.query.date
      : moment()
          .endOf('day')
          .toDate()

    try {
      const tasks = await app
        .db(TABLE_TASKS)
        .where({ userId: req.user.id })
        .where('estimateAt', '<=', date)
        .orderBy('estimateAt')

      res.json(tasks)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  const save = async (req, res) => {
    if (!req.body.desc.trim()) {
      return res.status(400)
    }

    req.body.userId = req.user.id

    try {
      await app.db(TABLE_TASKS).insert(req.body)

      res.status(204).send()
    } catch (err) {
      res.status(500).json(err)
    }
  }

  const remove = async (req, res) => {
    const { id } = req.params
    if (!id) {
      return res.status(400).send('Informe o id.')
    }

    if (isNaN(id)) {
      return res.status(400).send('O id informado é inválido.')
    }

    try {
      const rowsDeleted = await app
        .db(TABLE_TASKS)
        .where({ id, userId: req.user.id })
        .del()

      if (rowsDeleted > 0) {
        res.status(204).send()
      } else {
        res.status(400).send(`Não foi encontrada a taks com id ${id}`)
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }

  const updateTaskDoneAt = async (req, res, doneAt) => {
    try {
      await app
        .db(TABLE_TASKS)
        .where({ id: req.params.id, userId: req.user.id })
        .update({ doneAt })

      res.status(204).send()
    } catch (err) {
      res.status(500).send(err)
    }
  }

  const toggleTask = async (req, res) => {
    try {
      const task = await app
        .db(TABLE_TASKS)
        .where({ id: req.params.id, userId: req.user.id })
        .first()

      if (!task) {
        return res
          .status(400)
          .send(`Task com id ${req.params.id} não encontrada`)
      }
      const doneAt = task.doneAt ? null : new Date()
      await updateTaskDoneAt(req, res, doneAt)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  return {
    getTasks,
    save,
    remove,
    toggleTask,
  }
}

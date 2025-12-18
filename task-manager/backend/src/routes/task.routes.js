const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

/**
 * Criar tarefa
 * POST /tasks
 */
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.userId
    });

    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar tarefa' });
  }
});

/**
 * Listar tarefas do usuário
 * GET /tasks
 */
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar tarefas' });
  }
});

/**
 * Atualizar tarefa
 * PUT /tasks/:id
 */
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar tarefa' });
  }
});

/**
 * Deletar tarefa
 * DELETE /tasks/:id
 */
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    return res.json({ message: 'Tarefa removida' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar tarefa' });
  }
});

module.exports = router;

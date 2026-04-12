//base configuration
import * as userService from '../services/userService.js';

/*
notes: mysql actions
format
  export const *action* = async (req, res) => {
    try {
      const {needed features for actions} = action
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

*/
export const createUser = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const user = await userService.createUser(name, bio);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, bio } = req.body;
    await userService.updateUser(req.params.id, name, bio);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
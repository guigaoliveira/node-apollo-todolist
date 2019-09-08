const nanoid = require('nanoid');

const todos = new Map();

const getTodo = (root, { where }) => {
  const { id } = where;
  return todos.get(id);
};

const getTodos = () => [...todos.values()];

const createTodo = (root, { input }) => {
  const createdAt = new Date();
  const id = nanoid();
  const todo = {
    id,
    title: input.title,
    completed: false,
    createdAt,
    updatedAt: createdAt,
  };
  todos.set(id, todo);
  return todo;
};

const updateTodo = (root, { where, input }) => {
  const { id } = where;
  const currentTodo = todos.get(id);

  return currentTodo
    ? Object.assign(currentTodo, input, { updatedAt: new Date() })
    : null;
};

const deleteTodo = (root, { where }) => {
  const { id } = where;
  return todos.delete(id);
};

module.exports = {
  Query: { todo: getTodo, todos: getTodos },
  Mutation: {
    createTodo,
    updateTodo,
    deleteTodo,
  },
};

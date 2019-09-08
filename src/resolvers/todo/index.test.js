const { Mutation, Query } = require('./index');

let todo;

it('create a todo', () => {
  todo = Mutation.createTodo(null, { input: { title: 'title' } });
  expect(todo).toMatchObject({
    id: expect.any(String),
    title: 'title',
    completed: false,
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  });
});

it('getting all todos', () => {
  expect(Query.todos()).toEqual([todo]);
});

it('getting todo by id', () => {
  expect(Query.todo(null, { where: { id: todo.id } })).toEqual(todo);
});

it('updating todo', () => {
  expect(
    Mutation.updateTodo(null, {
      input: { title: 'updated title' },
      where: { id: 'id_not_exist' },
    }),
  ).toEqual(null);

  expect(
    Mutation.updateTodo(null, {
      input: { title: 'updated title', completed: true },
      where: { id: todo.id },
    }),
  ).toMatchObject({
    id: todo.id,
    title: 'updated title',
    completed: true,
    createdAt: todo.createdAt,
    updatedAt: expect.any(Date),
  });
});

it('deleting todo', () => {
  expect(Mutation.deleteTodo(null, { where: { id: todo.id } })).toEqual(true);
  expect(Mutation.deleteTodo(null, { where: { id: todo.id } })).toEqual(false);
});

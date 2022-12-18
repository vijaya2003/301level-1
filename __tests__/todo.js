/* eslint-disable no-undef */
// const todoList = require("../todo");

// const { all, markAsComplete, add } = todoList();

// describe("Todolist Test Suite", () => {
//   beforeAll(() => {
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toLocaleDateString("en-CA"),
//     });
//   });
//   test("Should add new todo", () => {
//     const todoItemsCount = all.length;
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toLocaleDateString("en-CA"),
//     });
//     expect(all.length).toBe(todoItemsCount + 1);
//   });
//   test("Should mark a todo as Complete", () => {
//     expect(all[0].completed).toBe(false);
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true);
//   });
//   test("Return a list of dueToday items", () => {
//     var c = dueToday();
//     expect(all[1].title).toBe(c[0].title);
//     expect(all[1].dueDate).toBe(c[0].dueDate);
//   });
//   test("Return a list of overdue items", () => {
//     var c = overdue();
//     expect(all[2].title).toBe(c[0].title);
//     expect(all[2].dueDate).toBe(c[0].dueDate);
//   });
//   test("Return a list of dueLater items", () => {
//     var c = dueLater();
//     expect(all[3].title).toBe(c[0].title);
//     expect(all[3].dueDate).toBe(c[0].dueDate);
//   });
// });

const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var i = d.toLocaleDateString("en-CA");
    var d1 = new Date();
    d1.setDate(d1.getDate() + 1);
    var j = d1.toLocaleDateString("en-CA");
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    add({
      title: "Test todo",
      completed: false,
      dueDate: i,
    });
    add({
      title: "Test todo",
      completed: false,
      dueDate: j,
    });
  });
  test("Add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("Mark a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Return a list of dueToday items", () => {
    var c = dueToday();
    expect(all[0].title).toBe(c[0].title);
    expect(all[0].dueDate).toBe(c[0].dueDate);
  });
  test("Return a list of overdue items", () => {
    var c = overdue();
    expect(all[1].title).toBe(c[0].title);
    expect(all[1].dueDate).toBe(c[0].dueDate);
  });
  test("Return a list of dueLater items", () => {
    var c = dueLater();
    expect(all[2].title).toBe(c[0].title);
    expect(all[2].dueDate).toBe(c[0].dueDate);
  });
});

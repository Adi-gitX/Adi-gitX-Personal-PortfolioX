const fs = require('fs');
const getTodosSync = () => {
  let data = fs.readFileSync('db.txt','utf-8');
  return data
};
const getTodoSync = (id) => {
  let data = getTodosSync()
  const objects = data.split('}{').map((obj, index, arr) => {
    if (index === 0) {
      return obj + '}';
    } else if (index === arr.length - 1) {
      return '{' + obj;
    } else {
      return '{' + obj + '}';
    }
  });
  for (let obj of objects) {
      let jsonObject = JSON.parse(obj);
      if (jsonObject.id === id) {
        console.log(jsonObject)
        return jsonObject;
      }
  }
};
const createTodoSync = (todo) => {
  let content = {
    "id" : Date.now(),
    "title" : todo,
    "isCompleted" : false,
    "createdAt" : new Date().toISOString(),
    "updatedAt" : new Date().toISOString()
  };
  let str = JSON.stringify(content,null,2)
  data=fs.appendFileSync('db.txt',str);
  return data
};
const updateTodoSync = (id, updates) => {};
const deleteTodoSync = (id) => {};
const getTodos = () => {};
const getTodo = (id) => {};
const createTodo = (todo) => {};
const updateTodo = async (id, updates) => {};
const deleteTodo = async (id) => {};
module.exports = {
  getTodosSync,
  getTodoSync,
  createTodoSync,
  updateTodoSync,
  deleteTodoSync,
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
// createTodoSync("adi")
getTodoSync(1723112544375)








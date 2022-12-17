// const http = require("http");
// const fs = require("fs");

// let homeContent = "";
// let projectContent = "";
// let registrationContent = "";
// let args = require("minimist")(process.argv.slice(2));

// let port = args["port"];

// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   homeContent = home;
// });

// fs.readFile("project.html", (err, project) => {
//   if (err) {
//     throw err;
//   }
//   projectContent = project;
// });

// fs.readFile("registration.html", (err, registration) => {
//   if (err) {
//     throw err;
//   }
//   registrationContent = registration;
// });

// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   http
//     .createServer((request, response) => {
//       let url = request.url;
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       switch (url) {
//         case "/project":
//           response.write(projectContent);
//           response.end();
//           break;
//         case "/project/registration":
//           response.write(registrationContent);
//           response.end();
//           break;
//         default:
//           response.write(homeContent);
//           response.end();
//           break;
//       }
//     })
//     .listen(port);
// });


const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let a = [];
    let len = all.length;
      let i=0;
      while(i<len){
      if (all[i].dueDate == yesterday) {
        a.push(all[i]);
      }
      i=i+1;
    }
    return a;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let a = [];
    let len = all.length;
      let i=0;
      while(i<len){
      if (all[i].dueDate == today) {
        a.push(all[i]);
      }
      i=i+1;
    }
    return a;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let a = [];
    let len = all.length;
      let i=0;
      while(i<len){
      if (all[i].dueDate == tomorrow) {
        a.push(all[i]);
      }
      i=i+1;
    }
    return a;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    let str = "";
    let l = list.length;
    let i = 0;
    while (i < l) {
      if (list[i].completed == false) {
        str = str + "[" + " ] ";
      } else {
        str = str + "[" + "x] ";
      }
      if (list[i].dueDate == today) {
        str += list[i].title + " " + "\n";
      } else {
        if (i == l - 1 && tomorrow == list[i].dueDate) {
          str += list[i].title + ". " + list[i].dueDate + "\n";
        } else {
          str += list[i].title + " " + list[i].dueDate + "\n";
        }
      }
      i++;
    }
    return str;
  };
  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")



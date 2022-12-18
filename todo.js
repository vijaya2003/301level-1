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

/* eslint-disable no-undef */

const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    var z = new Date();
    z.setDate(z.getDate() - 1);
    const a = z.toLocaleDateString("en-CA");
    let b = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == a) {
        b.push(all[i]);
      }
    }
    return b;
  };

  const dueToday = () => {
    const a = new Date().toLocaleDateString("en-CA");
    let b = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == a) {
        b.push(all[i]);
      }
    }
    return b;
  };

  const dueLater = () => {
    var z = new Date();
    z.setDate(z.getDate() + 1);
    var a = z.toLocaleDateString("en-CA");
    let b = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == a) {
        //console.log(all[i]);
        b.push(all[i]);
      }
    }
    return b;
  };

  const toDisplayableList = (list) => {
    let s = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed == true) {
        s = s + "[" + "x] ";
      } else {
        s = s + "[ " + "] ";
      }
      const a = formattedDate(dateToday);
      const b = formattedDate(
        new Date(new Date().setDate(dateToday.getDate() + 1))
      );
      if (list[i].dueDate == a) {
        s = s + list[i].title + " " + "\n";
      } else {
        if (i == list.length - 1 && b == list[i].dueDate) {
          s = s + list[i].title + ". " + list[i].dueDate + "\n";
        } else {
          s = s + list[i].title + " " + list[i].dueDate + "\n";
        }
      }
    }
    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

// const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n\n")

// console.log("Due Today")
// let itemsDueToday = todos.dueToday()
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
// console.log(formattedItemsDueToday)
// console.log("\n\n")

// console.log("Due Later")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
// console.log(formattedItemsDueLater)
// console.log("\n\n")

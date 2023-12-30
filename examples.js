// fetch("list/cats.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

//   fetch("list/cats.json"):
//   fetch is a function in JavaScript used to make requests to a server and get data.
//   "list/cats.json" is the URL to which the request is being made. It's like asking the server for information located at that address.
//   .then((response) => { ... }):

//   The then part is where we handle what happens after the request is made. It's like saying, "Once you've gotten the data, do this."
//   (response) is a parameter. Think of it as a placeholder for the information that the server sends back. It's like a box that contains the server's response.
//   The arrow function inside then ((response) => { ... }) is what we want to do with that box of information. In this case, it logs the message "resolved" and the response to the console.
//   return response.json();:

//   After logging the response, we want to do something specific with the data inside that response.
//   response.json() is a method that reads the data in the response box and tries to interpret it as JSON (JavaScript Object Notation), which is a way of structuring data.
//   The return keyword is saying, "Take the result of response.json() and use it as the result of this part of the process." This result becomes the new promise that the next then will handle.
//   .then((data) => { ... }):

//   Another then block follows. It's saying, "Once you've successfully turned the response into usable data, do this."
//   (data) is like a new box that contains the data we got from the server. It's a friendlier format that we can work with in JavaScript.
//   The arrow function inside then logs the data to the console. It's like saying, "Show me the contents of this box on the screen."
//   .catch((err) => { ... }):

//   The catch block is like a safety net. It's there in case something goes wrong at any step in the process.
//   (err) is a parameter that represents an error. If something goes awry during the fetch or processing, this is where we find out what happened.
//   The arrow function inside catch logs the message "rejected" along with the error information to the console.

//4
// // arrow function
// const getToDos = (resource) => {
//     const request = new XMLHttpRequest();

//     return new Promise((resolve, reject) => {
//       //3.
//       // track the progress of a request
//       request.addEventListener("readystatechange", () => {
//         //   console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200) {
//           const data = JSON.parse(request.responseText);
//           resolve(data);
//         } else if (request.readyState === 4) {
//           reject("error getting resource");
//         }
//       });
//       //1.
//       // sets up the request
//       request.open("GET", resource);

//       //2.
//       // sends the request
//       request.send();
//     });
//   };

//   getToDos("list/cats.json")
//     .then((data) => {
//       console.log("promise 1 resolved:", data);
//       return getToDos("/list/coding.json");
//     })
//     .then((data) => {
//       console.log("promise 2 resolved:", data);
//       return getToDos("list/games.json");
//     })
//     .then((data) => {
//       console.log("promise 3 resolved:", data);
//     })
//     .catch((err) => {
//       console.log("promise rejected:", err);
//     });

// callback hell example
// getToDos("list/cats.json", (err, data) => {
//   console.log(data);
//   getToDos("list/coding.json", (err, data) => {
//     console.log(data);
//     getToDos("list/games.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

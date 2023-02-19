// import logo from 'logo.svg';
// import 'App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ul>
//           <li class="dropdown">
//               <a href="index.html">Home</a>
//           </li>

//           <li class="dropdown">
//               <a href="#">Lists</a>
//               <div class="dropdown-content">
//                   <a href="manageList.html">Manage</a>
//                   <a href="addList.html">Add</a>
//               </div>
//           </li>
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('GroGetter');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

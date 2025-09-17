import http from 'node:http'
// PART 2
const PORT = 8000

import { getDataFromDB } from "./database/db.js"

const destination = await getDataFromDB();

const server = http.createServer((req, res) => {
  //console.log(req.url)
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end("<html><h1>The server is working</h1></html>")

  /*
Challenge:
1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
   Content-Type to ‘application/json’ - watch out for casing! 
*/
   res.setHeader("Content-Type", "application/json")
  if (req.url === '/api' && req.method === 'GET') {
    res.statusCode = 200
    res.end(JSON.stringify(destination))
  }else{
    /*
Challenge:
  1. If the client tries to access a route that isn’t covered by the above, send this object: 
      {error: "not found", message: "The requested route does not exist"}
  Think: what do we need to send along with the data?
*/
res.statusCode = 404
res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))


// const animal = {

//   type: 'cattle',
//   name: 'Yak Nicholson'

// }

// console.log(animal)

// console.log(JSON.stringify(animal))

// console.log(typeof JSON.stringify(animal))


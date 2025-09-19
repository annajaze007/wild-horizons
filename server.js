import http from 'node:http'
// PART 2
const PORT = 8000

import { getDataFromDB } from "./database/db.js"

const destination = await getDataFromDB();

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "application/json")

  if (req.url === '/api' && req.method === 'GET') {
    res.statusCode = 200
    res.end(JSON.stringify(destination))
  }

  else if (req.url.startsWith("/api/continent")) {
    const continent = req.url.split('/').pop()
    //const continent = req.url.substring(req.url.lastIndexOf('/') + 1)
    console.log(continent)
    const destinationFiltree = destination.filter(d => d.continent.toLowerCase() === continent.toLowerCase())
    res.statusCode = 200
    res.end(JSON.stringify(destinationFiltree))

    /*  
    2. If it does, serve only items from that continent.
      (How can you get to what comes after the final slash?)
      (What method can you use to filter data?)
    */
  }
  else {
    res.statusCode = 404
    res.end(JSON.stringify({ error: "not found", message: "The requested route does not exist" }))
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


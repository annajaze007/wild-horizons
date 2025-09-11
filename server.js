import http from 'node:http'

const PORT = 8000


const server = http.createServer((req, res) => {

    console.log(req.url)

    /*
    Challenge:
    Check the ‘url’ property on the req object. 
    Only serve our string if it’s ‘/api’.
    */

    if (req.method === "GET") {
        res.end('This is from the server')
    }

    else {res.end('This is not from the server')}

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

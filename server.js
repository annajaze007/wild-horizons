import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.write('Partie 1\n') // envoie un premier morceau
    res.write('Partie 2\n') // envoie un second morceau
    res.end('Fin de la reponseeeee') // dernier morceau + on termine la réponse
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))
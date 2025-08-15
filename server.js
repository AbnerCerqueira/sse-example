import fastify from 'fastify'

const app = fastify()

app.get('/stream', (request, reply) => {
  reply.raw.writeHead(200, {
    'content-type': 'text/event-stream',
    'cache-control': 'no-cache',
    connection: 'keep-alive',
    'access-control-allow-origin': '*',
  })

  let count = 0
  const interval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 11)

    console.log('numero sorteado', randomNumber)

    if (randomNumber === 5) {
      reply.raw.write(`data: ${randomNumber}\n\n`)
      count += 1
    }

    if (count === 5) {
      reply.raw.end()
    }
  }, 1000)

  request.raw.on('close', () => {
    clearInterval(interval)
  })
})

app.listen({ port: 3333 })

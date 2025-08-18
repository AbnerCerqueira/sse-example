import fastify from 'fastify'

const app = fastify()

app.get('/stream', (request, reply) => {
  reply.raw.writeHead(200, {
    'content-type': 'text/event-stream',
    'cache-control': 'no-cache',
    connection: 'keep-alive',
    'access-control-allow-origin': '*',
  })

  const interval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 11)

    console.log('numero sorteado', randomNumber)

    if (randomNumber % 2 === 0) {
      reply.raw.write('event: even\n')
      reply.raw.write(`data: ${randomNumber}\n\n`)
      return
    }

    reply.raw.write('event: odd\n')
    reply.raw.write(`data: ${randomNumber}\n\n`)
  }, 1000)

  request.raw.on('close', () => {
    clearInterval(interval)
  })
})

app.listen({ port: 3333 })

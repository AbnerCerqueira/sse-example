# O que é
Server-Sent-Events serve para comunicação unidirecional em tempo real do servidor para o cliente, ideal para atualizações de informações simples que precisam ser enviadas de forma contínua. Exemplo: feed de uma rede social, placar de esportes, etc

https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events

## Meu exemplo
O servidor irá sortear um número de 0 a 10 e responder o número sorteado e se ele é impar ou par, esse exemplo da pra ser traduzido em uma situação real onde tenho eventos diferentes no mesmo endpoint e quero avisar para o client qual desses eventos que ocorreu

## Rodar

Instale as dependências e rode o servidor
```
$ snpm i
$ node server.js
```
Abra o arquivo client.html no seu navegador

Se não quiser abrir no navegador use o terminal
```
$ curl http://localhost:3333/stream
```

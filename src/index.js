import express from "express"
import cors from "cors"
import { persons } from "./persons.js"

const app = express()
const porta = 3333

app.use(cors())



app.get("/", (request, response) => {
    response.json(persons)
})

//3000, 3001, 3002, 
app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}!`)
}) 



/*
import express from "express"

const app = express()

//get envia uma informação pro front end, post, guarda informação, patch e put altera informações do banco de dados, delete deleta uma informação do banco de dados

//json tem "" nas propriedades e as n msg tem "
a resposta padrão do backend é sempre um json, java script não entende json, são formatos diferentes, o backend discriptografa o json criptografado, e o front end criptografa de novo pra entender.

//no terminal escrever npm run dev liga o servidor/backend
//package. json criou ele 
//nodemon serve pra não ter q ficar recarregando toda vez, ele atualiza sozinho quando tiver alteração 

//conectar 2 js tem q importar o array no outro importa em um e exporta no outro
usa export{persons} *nome do array*
 e no outro import{persons} from "./persons.js"

//request a informação que vem do front end, response envia pro frontend
app.get('/', (request, response) => {
    response.send("<h1>Olá, mundo</h1>")
})

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333!")
})
*/
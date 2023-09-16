const mongoose = require("mongoose")

const server = 'soqm73z.mongodb.net'
const database = "node"
const username =  "zevictor2003"
const password =   "ctej00gKpwzqHeVP"

// mongodb+srv://zevictor2003:<password>@bancodedados.soqm73z.mongodb.net/

class Database {
    async _connect() {
        mongoose
            .connect(`mongodb+srv://${username}:${password}@${database}.${server}`)
            .then(() => {
                console.log("Conectado no banco com sucesso")
            })
            .catch((error) => {
                console.error("Erro ao conectar no banco: " + error)
            })
    }
}

module.exports = new Database()
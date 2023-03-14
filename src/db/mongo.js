import mongoose from "mongoose"
//TE DEJO LA URI PARA QUE PUEDAS EJECUTARLO LOCALMENTE EN TU MAQUINA SI DESEAS EN MONGO ATLAS
const uri = `mongodb+srv://Alexander:alejandrogaqt@cluster0.gmqxflc.mongodb.net/?retryWrites=true&w=majority`

const connection = {}

//CONEXION A LA BASE DE DATOS USANDO MONGOOSE
async function dbConnect() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState

    return db
}

export default dbConnect

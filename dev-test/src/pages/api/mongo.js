import dbConnect from "@/db/mongo"
import OrderBook from "@/db/ordersBookSchema"

//PEQUEÑO BACKEND PARA MANEJAR LA BASE DE DATOS MAS FACILMENTE CON UN ENDPOINT EN UNA API NEXT

export default async function handler(req, res) {
    try {
        const e = await dbConnect()
        console.log("CONECTED")
    } catch (error) {
        console.log(error)
    }
    console.log("AHAHAKHKSFHAH")

    if (req.method === "POST") {
        console.log(req.body)
        const order = new OrderBook(req.body)
        await order.save()
    }

    res.send(200)
}

import React, { useEffect, useState, useRef } from "react"
import { Chart } from "chart.js/auto"
import Cards from "@/components/SymbolCards"
import { Text, Card, Table, useAsyncList, useCollator, Container } from "@nextui-org/react"
import OrdersBookTable from "@/components/OrdersBookTable"
import IndexHeader from "@/components/IndexHeader"

/**
 * crea un nuevo registro en la base de datos
 * @param {Object} data Datos validos para el esquema mongoose
 */
const insertToDataBase = async (data) => {
    fetch("http://localhost:3000/api/mongo", {
        method: "POST",
        body: JSON.stringify(data),

        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((e) => console.log(e))
        .catch((e) => console.log(e))
}

const index = () => {
    const [data, setData] = useState([])
    const [symbolData, setSymbolData] = useState({})
    const [tableData, setTableData] = useState([])
    const [orderBook, setOrderBook] = useState(null)

    const webSocketUrl = "wss://ws.bitmex.com/realtime?subscribe=instrument:XBTUSD,orderBookL2_25:XBTUSD"

    useEffect(() => {
        const socket = new WebSocket(webSocketUrl)
        socket.addEventListener("open", (event) => {
            console.log("CONEXION ABIERTA")
        })
        /**
         * Escucha todos los mensajes a los enventos suscritos
         * en el websocket
         */
        socket.addEventListener("message", (event) => {
            const pre = JSON.parse(event.data)
            if (!pre.data) return
            /**
             * Datos para la card
             */
            setSymbolData((prevData) => {
                return { ...prevData, ...pre.data[0] }
            })
            /**
             * Datos para la tabla
             */
            if (pre.action === "partial" && pre.data.length === 50) {
                let data = []
                if (!orderBook) setOrderBook(pre)
                pre.data.forEach((el) => {
                    data.push(el)
                })
                setTableData(data)
            }
            /**
             * Datos para el grafico en vivo
             */
            if (!pre.data[0].lastPriceProtected) return
            setData((data) => [...data, pre.data[0].lastPriceProtected])
        })
        return () => {
            socket.close()
        }
    }, [])

    /**
     * Verifica si hay datos y si es asi los inserta a la base de datos
     */
    useEffect(() => {
        if (!orderBook) return
        insertToDataBase(orderBook)
    }, [orderBook])

    return (
        <>
            <Container css={{ display: "flex", flexDirection: "center", gap: "$10", marginBottom: "$20" }}>
                <IndexHeader />
                <Cards data={symbolData} />
                <LineChart data={data} />
                <Text h2>Orders Book</Text>
                <OrdersBookTable data={tableData} />
            </Container>
        </>
    )
}

/**
 * Grafico de lineas
 */
const LineChart = ({ data }) => {
    const chartRef = useRef()
    const chart = useRef(null)

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d")

            chart.current = new Chart(myChartRef, {
                type: "line",
                data: {
                    labels: data,
                    datasets: [
                        {
                            label: "Last Price Protected",
                            data: data,
                            borderColor: "green",
                            fill: true,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            })
        }
    }, [])

    useEffect(() => {
        /**
         * Crea nuevas posiciones en el grafico de linea hasta llegar
         * a 20
         */
        if (chart.current.data.datasets[0].data.length <= 20) {
            chart.current.data.datasets.forEach((dataset) => {
                dataset.data.push(data[data.length - 1])
            })
        } else {
            /**
             * A partir de las 20 posiciones solo se actualizaran
             */
            chart.current.data.datasets[0].data.forEach((el, index) => {
                if (index === 0) return
                chart.current.data.datasets[0].data[index - 1] = chart.current.data.datasets[0].data[index]
                chart.current.data.datasets[0].data[index] = data[data.length - 1]
            })
            console.log(chart.current.data.datasets[0].data.length)
        }
        chart.current.update()
    }, [data])

    return (
        <>
            <Card>
                <canvas ref={chartRef} />
            </Card>
        </>
    )
}

export default index

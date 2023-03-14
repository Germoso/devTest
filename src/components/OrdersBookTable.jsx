import React from "react"
import { Badge, Card, Table, text } from "@nextui-org/react"

/**
 * ESTA ES LA TABLA DEL ORDERSBOOK
 * NOTA: IBA A IMPLEMENTAR UN SORT O FILTRO A LOS DATOS DE LA TABLA PERO DEBIDO
 * A FALTA DE TIEMPO PARA INVESTIGAR COMO SE IMPLEMENTA EN ESTA UI EN ESPECIFICO
 * NO LO TERMINÉ DE IMPLEMENTAR
 */
const OrdersBookTable = ({ data }) => {
    return (
        <Card>
            {/* <Badge content="COÑO PERO" color="success" placement="" shape="circle" style={{ display: "absolute" }}> */}
            <Table
                aria-label="Example table with static content"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
            >
                <Table.Header>
                    <Table.Column>Side</Table.Column>
                    <Table.Column allowsResizing>Price</Table.Column>
                    <Table.Column allowsResizing>Size</Table.Column>
                    <Table.Column allowsResizing allowsSorting>
                        Date
                    </Table.Column>
                </Table.Header>
                <Table.Body>
                    {data.map((el) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{el.side}</Table.Cell>
                                <Table.Cell>{el.price}</Table.Cell>
                                <Table.Cell>{el.size}</Table.Cell>
                                <Table.Cell>{el.timestamp}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={6}
                    onPageChange={(page) => console.log({ page })}
                />
            </Table>

            {/* </Badge> */}
        </Card>
    )
}

export default OrdersBookTable

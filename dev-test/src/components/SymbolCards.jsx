import React from "react"
import { Card, Grid, Text, Link, Row } from "@nextui-org/react"
import SymbolCard from "./SymbolCard"

const Cards = ({ data }) => {
    return <Item data={data} />
}

const Item = ({ data }) => {
    return (
        <Grid.Container css={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Grid css={{ w: "300px" }}>
                <SymbolCard data={data} />
            </Grid>
        </Grid.Container>
    )
}

export default Cards

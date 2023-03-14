import { Card, Text, Grid, Row, Loading } from "@nextui-org/react"
import React from "react"

/**
 * ESTA ES LA CARD DE LA DIVISA, OBTIENE DATOS EN VIVO ACTUALIZA SUS DATOS EN TIEMPO REAL
 */

const SymbolCard = ({ data }) => {
    return (
        <Card css={{ p: "$6" }}>
            {data.symbol ? (
                <>
                    <Card.Header>
                        <Grid.Container css={{ pl: "$6" }}>
                            <Grid xs={12}>
                                <Text size={"$lg"} css={{ fontWeight: "$bold" }}>
                                    {data.symbol}
                                </Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text css={{ color: "$accents8" }} color="secondary">
                                    {data.state}
                                </Text>
                            </Grid>
                        </Grid.Container>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                        <Grid.Container>
                            <Grid>
                                <Row css={{ gap: "$2" }} align="center">
                                    <Text b>Volume:</Text>
                                    <Text>{data.volume}</Text>
                                </Row>
                                <Row css={{ gap: "$2" }} align="center">
                                    <Text b>High Price:</Text>
                                    <Text>{data.highPrice}</Text>
                                </Row>
                                <Row css={{ gap: "$2" }} align="center">
                                    <Text b>Low price:</Text>
                                    <Text>{data.lowPrice}</Text>
                                </Row>
                                <Row css={{ gap: "$2" }} align="center">
                                    <Text b>Bid Price:</Text>
                                    <Text>{data.bidPrice}</Text>
                                </Row>
                                <Row css={{ gap: "$2" }} align="center">
                                    <Text b>Ask Price:</Text>
                                    <Text>{data.askPrice}</Text>
                                </Row>
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                    <Card.Footer>
                        <Text color="primary">Last Price Protected {data.lastPriceProtected}</Text>
                    </Card.Footer>
                </>
            ) : (
                <Loading />
            )}
        </Card>
    )
}

export default SymbolCard

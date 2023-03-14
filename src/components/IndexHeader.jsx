import { Grid, Text } from "@nextui-org/react"
import React from "react"

//ESTE ES EL HEADER DEL INDEX
const IndexHeader = () => {
    return (
        <Grid.Container justify="center" alignItems="center" css={{ height: "100vh", width: "100%" }}>
            <Grid css={{ textAlign: "center", gap: "$0" }}>
                <Text
                    h1
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    size="$8xl"
                    weight="bold"
                >
                    Dev Test
                </Text>
                <Text h2 size="$2xl" css={{ color: "$neutral" }}>
                    Bitmex Exchange
                </Text>
            </Grid>
        </Grid.Container>
    )
}

export default IndexHeader

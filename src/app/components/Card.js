import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import React from 'react'

const CardContainer = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent></CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardContainer
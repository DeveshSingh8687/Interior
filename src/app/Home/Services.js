import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
const Services = () => {
    const serviceData = [{ title: 'Bedroom', logo: '/services/Bedroom.jpg' }, { title: 'LED', logo: '/services/LED.jpg' }, { title: 'Drawing Room', logo: '/services/Drawing.jpg' }, { title: 'Kitchen', logo: '/services/Kitchen.jpg' }]
    return (
        <div className="services">
            <div className="main-heading">We Deals in </div>
            <div className="sub-heading">We specialize in crafting interiors that reflect your unique style, blending elegance with comfort and practicality. Whether you're looking to revitalize a single room or redesign an entire home, our team of experienced designers is dedicated to creating spaces that inspire, rejuvenate, and delight.</div>
            <div className="service-card-container">
                {
                    serviceData.map((val, ind) => (
                        <Card sx={{ maxWidth: 345 }} key={ind}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={val.logo}
                                title={val.title}
                            />
                            <CardContent style={{textAlign:'center'}}>
                                <Typography gutterBottom variant="h5" component="div">{val.title}</Typography>
                                <Typography variant="p">Explore {val.title}</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
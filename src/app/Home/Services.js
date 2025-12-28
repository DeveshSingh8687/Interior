import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
const Services = () => {
    const serviceData = [{ title: 'Bedroom', logo: '/services/Bedroom.jpg' }, { title: 'LED', logo: '/services/LED.jpg' }, { title: 'Drawing Room', logo: '/services/Drawing.jpg' }, { title: 'Kitchen', logo: '/services/Kitchen.jpg' }]
    return (
        <div className="services">
            <div className="main-heading">We Deals in </div>
            <div className="sub-heading">We specialize in crafting interiors that reflect your unique style, blending elegance with comfort and practicality.</div>
            <div className="service-card-container">
                {
                    serviceData.map((val, ind) => (
                        <Card sx={{ maxWidth: 345, boxShadow: "none" }} key={ind}>
                            <CardMedia
                                sx={{ height: "50vh", borderRadius: "61px" }}
                                image={val.logo}
                                title={val.title}
                            />
                            <CardContent style={{textAlign:'center', lineHeight: "0.5"}}>
                                <Typography  variant="h5" component="div" style={{fontWeight: "600"}}>{val.title}</Typography>
                                <Typography variant="p" style={{color: "#737373", fontSize: "12px"}}>Explore {val.title}</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
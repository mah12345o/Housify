import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import Card from '@mui/material/Card';
import { FaShareAlt } from "react-icons/fa";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardComponent = ({ data }) => {

    const savedcards = useSelector((state) => state.cartItems);

    return (
        <>
            {data.map((getdata) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2 cardcontent" >
                    {getdata.isfood &&
                        <div className='foodAvelaible d-flex align-items-center'>
                            <IoFastFoodOutline />
                            &nbsp; Food Avelaible
                        </div>
                    }
                    <div className='forRent'>
                        <FaHome />
                        &nbsp;For {getdata.isAve}
                    </div>
                    <Card style={{ background: ' #f7f7f7', width: '100%', padding: '5px', border: '1px solid #e7e7e7', borderRadius: '8px' }} >
                        <div style={{ overflow: 'hidden' }}>
                            <CardMedia
                                className='position-relative bg-img'
                                sx={{ height: 240 }}
                                image={`https://logiqproperty.blr1.digitaloceanspaces.com/${getdata.isImg}`}
                                title="">
                            </CardMedia>
                        </div>
                        <div className='row'>
                            <div className='col-8 col-md-8 col-lg-8 p-0'>
                                <CardContent className='p-3 pb-2'>
                                    <Typography className='cardtext' style={{ fontSize: '14px' }} gutterBottom variant="h5" component="div">
                                        {getdata.isname}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <div style={{ color: '#ff7348' }} className='px-0'>
                                            <FaLocationDot />
                                            {getdata.iscityname}  {getdata.isstatename}
                                        </div>
                                        <div style={{ color: 'black' }} className='px-0 pt-1 h5 m-0'>
                                            ₹ {getdata.isprice} Onwards
                                        </div>
                                    </Typography>
                                </CardContent>
                            </div>
                            <div className='col-4 col-md-4 col-lg-4 p-0'>
                                <CardActions>

                                    {savedcards.find((getid) => getid.id === getdata.getid) ?

                                        <IconButton aria-label="delete" onClick={() => getdata.handelRemoveData(getdata.id)}>
                                            <FaHeart style={{ color: "blue" }} />
                                        </IconButton >
                                        :
                                        <IconButton aria-label="delete" onClick={() => getdata.handelSaveData(getdata)}>
                                            <FaHeart style={{ color: "red" }} />
                                        </IconButton >}

                                    <IconButton aria-label="delete" >
                                        <FaShareAlt style={{ fontSize: '20px', color: "#ff7348" }} />
                                    </IconButton >
                                </CardActions>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </>
    );
};
export default CardComponent;
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { removeItem } from '../redux/action';
import { FaLocationDot } from "react-icons/fa6";
import IconButton from '@mui/material/IconButton';
import { IoFastFoodOutline } from "react-icons/io5";
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'

const SavedData = () => {
    const savedcards = useSelector((state) => state.cartItems);

    const dispatch = useDispatch()
    const handelremoveItem = (itemid) => {
        dispatch(removeItem(itemid));
    }
    return (

        <div className='row container m-auto ' style={{paddingTop:'100px'}}>
            <h3 style={{ color: 'orange' }}> {savedcards.length === 0 ? "No" : savedcards.length} results <span style={{ color: 'black' }}>|Saved </span></h3>
            {savedcards.map((carddata) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2 cardcontent" key={carddata.id}>
                    <Card style={{ background: ' #f7f7f7', width: '100%', padding: '10px', border: '5px solid #e7e7e7', borderRadius: '8px' }} >
                        <CardMedia
                            className='position-relative '
                            sx={{ height: 140 }}
                            image={`https://logiqproperty.blr1.digitaloceanspaces.com/${carddata.thumbnail}`}
                            title=""
                        >
                            {carddata.foodAvailability &&
                                <div style={{ position: 'absolute', top: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '2px', padding: '0px 4px ' }}>
                                    <IoFastFoodOutline />  &nbsp;  Food Avelaible
                                </div>
                            }
                            <div style={{ position: 'absolute', bottom: '0px', backgroundColor: 'blue', color: 'white', borderRadius: '2px', padding: '0px 4px ' }}><FaHome /> &nbsp; {carddata.availableFor}
                            </div>
                        </CardMedia>
                        <div className='row'>
                            <div className='col-8 col-md-8 col-lg-8 p-0'>
                                <CardContent className='p-3 pb-2'>
                                    <Typography className='cardtext' gutterBottom variant="h5" component="div">
                                        {carddata.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <div style={{ color: '#ff7348' }} className='px-2'>
                                            <FaLocationDot />   {carddata.address.city.name}  {carddata.address.state.name}
                                        </div>
                                        <div style={{ color: 'black' }} className='px-0 pt-1 h5 m-0'>
                                            ₹ {carddata.displayPrice.fixedPrice} Onwards
                                        </div>
                                    </Typography>
                                </CardContent>
                            </div>
                            <div className='col-4 col-md-4 col-lg-4 p-0'>
                                <CardActions >
                                    <IconButton aria-label="delete" onClick={() => handelremoveItem(carddata.id)}>
                                        <IoIosRemoveCircle style={{ color: "#ff7348" }} />
                                    </IconButton >
                                </CardActions>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default SavedData
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
import CardComponent from '../component/CardComponent';

const SavedData = () => {
    const savedcards = useSelector((state) => state.cartItems);

    const dispatch = useDispatch()
    const handelremoveItem = (itemid) => {
        dispatch(removeItem(itemid));
    }

    const feild = savedcards.map((setdata)=>(
        { 
          getid:setdata.id,
          length:savedcards.length,
          isfood:setdata.foodAvailability,
          isImg:setdata.thumbnail,
          isAve:setdata.availableFor,
          isname:setdata.name,
          iscityname:setdata.address.city.name,
          isstatename:setdata.address.state.name,
          isprice:setdata.displayPrice.fixedPrice,
        //   handelSaveData: () => handleSaveData(setdata),
          handelRemoveData: () => handelremoveItem(setdata.id),
        }
      ))
    return (
        <div className='row container m-auto ' style={{paddingTop:'100px'}}>
         <h3 style={{ color: 'orange' }}> {savedcards.length === 0 ? "No" : savedcards.length} results <span style={{ color: 'black' }}>|Saved </span></h3>
          <CardComponent data={feild}/>
        </div>
    )
}

export default SavedData
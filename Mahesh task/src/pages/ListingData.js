import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
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
import { removeItem } from '../redux/action';
import CardComponent from '../component/CardComponent';

const ListingData = () => {
  const [data, setData] = useState([]);
  const [scrollCount, setScrollCount] = useState(1);
  const dispatch = useDispatch();
  const savedcards = useSelector((state) => state.cartItems);
  console.log(savedcards)
  // Fetch getdata data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.housivity.com/api/v1/property?city=Gandhinagar&projectType=%5B%22pgHostel%22%5D&page=${scrollCount}`);
        const data = await response.json();
        setData((prevData) => [...prevData, ...data.propertyList]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [scrollCount]);

  // Function to handle adding getdata to cart
  const handelRemove = (removeid) => {
    dispatch(removeItem(removeid));
  }

  const handleSaveData = (getdata) => {
      localStorage.setItem("PRODUCT_LIST", JSON.stringify(getdata));
      dispatch(addToCart(getdata));
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    if (currentScroll >= documentHeight) {
      setScrollCount((prevCount) => prevCount + 1);
    }
  }

  window.addEventListener('scroll', handleScroll);

const feild = data.map((setdata)=>(
  { 
    getid:setdata.id,
    length:data.length,
    isfood:setdata.foodAvailability,
    isImg:setdata.thumbnail,
    isAve:setdata.availableFor,
    isname:setdata.name,
    iscityname:setdata.address.city.name,
    isstatename:setdata.address.state.name,
    isprice:setdata.displayPrice.fixedPrice,
    handelSaveData: () => handleSaveData(setdata),
    handelRemoveData: () => handelRemove(setdata.id),
  }
))


  return (
    <div className='p-2'>
      <div className='row container m-auto ' style={{paddingTop:'100px'}}>
        <h3 style={{ color: 'orange' }}> {data.length} results |<span style={{ color: 'black' }}> Hostel List</span></h3>
        <CardComponent data={feild}/>
      </div>
    </div>
  );
};
export default ListingData;
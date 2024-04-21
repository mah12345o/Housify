import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

const ListingData = () => {
  const [data, setData] = useState([]);
  const [scrollCount, setScrollCount] = useState(1);
  const dispatch = useDispatch();
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

  return (
    <div className='p-2'>
      <div className='row container m-auto'>
        <h3 style={{ color: 'orange' }}> {data.length} results |<span style={{ color: 'black' }}> Hostel List</span></h3>
        {data.map((getdata) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2 cardcontent" key={getdata.id}>
            {getdata.foodAvailability &&
              <div className='foodAvelaible d-flex align-items-center'>
                <IoFastFoodOutline />
                &nbsp; Food Avelaible
              </div>
            }
            <div className='forRent'>
              <FaHome />
              &nbsp;For {getdata.availableFor}
            </div>
            <Card style={{ background: ' #f7f7f7', width: '100%', padding: '5px', border: '1px solid #e7e7e7', borderRadius: '8px' }} >
              <div style={{ overflow: 'hidden' }}>
                <CardMedia
                  className='position-relative bg-img'
                  sx={{ height: 240 }}
                  image={`https://logiqproperty.blr1.digitaloceanspaces.com/${getdata.thumbnail}`}
                  title="">
                </CardMedia>
              </div>
              <div className='row'>
                <div className='col-8 col-md-8 col-lg-8 p-0'>
                  <CardContent className='p-3 pb-2'>
                    <Typography className='cardtext' style={{ fontSize: '14px' }} gutterBottom variant="h5" component="div">
                      {getdata.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <div style={{ color: '#ff7348' }} className='px-0'>
                        <FaLocationDot />
                        {getdata.address.city.name}  {getdata.address.state.name}
                      </div>
                      <div style={{ color: 'black' }} className='px-0 pt-1 h5 m-0'>
                        ₹ {getdata.displayPrice.fixedPrice} Onwards
                      </div>
                    </Typography>
                  </CardContent>
                </div>
                <div className='col-4 col-md-4 col-lg-4 p-0'>
                  <CardActions >
                    <IconButton aria-label="delete" onClick={() => handleSaveData(getdata)}>
                      <FaHeart style={{ color: "#ff7348" }} />
                    </IconButton >
                    <IconButton aria-label="delete" onClick={() => handleSaveData(getdata)}>
                      <FaShareAlt style={{ fontSize: '20px', color: "#ff7348" }} />
                    </IconButton >
                  </CardActions>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListingData;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const savedcards = useSelector((state) => state.cartItems);
    return (
        <div style={{ backgroundColor: '#f1955c' }}>
            <div className="App  header-main p-3">
                <div className="App-header" style={{ display: 'flex' }}>
                    <div style={{ flex: '2' }}>
                        <img style={{ width: '60px' }} alt='img' src="https://triviamaker.com/assets/image/National%20Parks%20Channel.png" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flex: '1' }}>
                        <div>
                            <Link to="/home">Home</Link>
                        </div>
                        <div className='d-flex'>
                            <Link to="/saved">Saved</Link> &nbsp;&nbsp;<h5 style={{color:"white",margin:"0px"}}>{savedcards.length}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

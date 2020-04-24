import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home =(props)=>{
    return(
        <Link to='/'>
        <button>
            Home
        </button>
        </Link>
    )
};
export default Home;
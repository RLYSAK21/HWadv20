import React from 'react';
import checkmark from '../svg/checkmark.svg'
import mask from '../img/mask.jpeg'
import dogcoin from '../img/dogcoin.jpeg'
import '../Home.css';

const HomePage = () => {
  const name = "Elon"
  const surName = "Mask"
  const nickName = `@${name.toLowerCase()}_${surName.toLowerCase()}`
  const fullName = `${name} ${surName}`
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
    return (
        <div className='post'>
        <div className='header'>
          <ul className='information'>
            <img className='photo' src={mask}></img>
            <li className='fullName'>{fullName}</li>
            <img className='post-svg' src={checkmark}></img>
            <li className='nickName'>{nickName}</li>
            <li className='nickName'>{currentDate}</li>
          </ul>
        </div>
        <p className='post-text'>This is my Home page. Nice to meet you.</p>
        <img className='post-img' src={mask}></img>
        <div className='footer'>
        </div>
      </div>
    );
};

export default HomePage;
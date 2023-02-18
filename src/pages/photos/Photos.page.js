import React from 'react';
import mask from '../img/mask.jpeg'
import dogcoin from '../img/dogcoin.jpeg'
import newSeo from '../img/newSeo.jpeg'
import chatGPT from '../img/chatGPT.jpeg'
import dog from '../img/dog.jpeg'
import elonTwitts from '../img/elonTwitts.jpeg'
import falcon from '../img/falcon.jpeg'
import twitterBoard from '../img/twitterBoard.jpeg'
import starlink from '../img/starlink.jpeg'

import '../Home.css';


const PhotosPage = () => {
    return (
        <div>
            <h1 className='h1-photos'> Hello, I'm Elon Musk</h1>
            <div className='grid-container'>
              <img className='photos' src={mask}></img>
              <img className='photos' src={dogcoin}></img>
              <img className='photos' src={newSeo}></img>
              <img className='photos' src={dog}></img>
              <img className='photos' src={chatGPT}></img>
              <img className='photos' src={elonTwitts}></img>
              <img className='photos' src={falcon}></img>
              <img className='photos' src={twitterBoard}></img>
              <img className='photos' src={starlink}></img>
        </div>
        </div>
        
    );
};

export default PhotosPage;
import React from 'react';
import './imagefullalbum.css';

const FullImageAlbum = ({currentPhotoIndex,setShowFullimageAlbum,handlePrevClick,handleNextClick,photos}) => {

    const currentPhoto = photos[currentPhotoIndex];

    const closeImage=()=>{
        setShowFullimageAlbum(false);
    }
   
  return (
    <div className='StyledPopUpBackdrop '>
    
             <div className='StyledPopUp '>
                 
                   <div className='image-container'>
                          <img src={currentPhoto.url} className='imageicon'/>
                          <span className='close' onClick={closeImage}>&times;</span>
                          <button class="prev-button" onClick={handlePrevClick}>prev</button>
                          <button class="next-button" onClick={handleNextClick}>next</button> 
                   </div>    
                        
        </div>
        
    </div>
  )
}

export default FullImageAlbum

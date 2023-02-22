import React,{useState,useEffect} from 'react'
import './photoselect.css';
import FullImageAlbum from './FullImageAlbum';

const SelectedPhotos = ({selectedAlubum}) => {

    const [photos,setPhotos]=useState([]);
    const [showFullimageAlbum,setShowFullimageAlbum]=useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);


    useEffect(()=>{
       const fetchPhotos= async ()=>{
          const response= await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlubum}`);
          const data= await response.json();
          setPhotos(data);
       }
       fetchPhotos();
    },[])

    const albumhandler=(index)=>{
        setCurrentPhotoIndex(index);
        setShowFullimageAlbum(true);
    }
   
    function handlePrevClick() {
        if (currentPhotoIndex > 0) {
          setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
      }

      function handleNextClick() {
        if (currentPhotoIndex < photos.length - 1) {
          setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
      }

  return (
    <>    
      <div className='photo-container'>
          <div className='photo-content'>
                    <h1>Photos</h1>
                 <div>
                       {
                        photos.map((album,index)=>{
                            return (
                                      <span key={album.id}>
                                          {    <a href="#" onClick={()=>albumhandler(index)}><img src={album.thumbnailUrl} width="115px" height="auto" style={{padding:'5px'}}/></a> }
                                      </span>
                            )
                         })
                       }
                    
                 </div>                 
          </div>           
    </div>
            {showFullimageAlbum && <FullImageAlbum 
                                    currentPhotoIndex={currentPhotoIndex}
                                     setShowFullimageAlbum={setShowFullimageAlbum} 
                                     handlePrevClick={handlePrevClick}
                                     handleNextClick={handleNextClick}
                                     photos={photos}
                                     />}
    </>
  )
}

export default SelectedPhotos

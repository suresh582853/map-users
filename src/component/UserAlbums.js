import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './useralbums.css';
import SelectedPhotos from './SelectedPhotos';

const UserAlbums = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userid');
  const name = searchParams.get('name');

  const [albums, setAlbums] = useState([]);
  const [selectedAlubum,setselectedAlubum] = useState('');
  const [showPhoto,setShowPhoto]=useState(false);

  useEffect(() => {

    const fetchAlbums = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const data = await response.json();
      setAlbums(data);
    };

    fetchAlbums();

  }, [userId]);


  const handleClick=(id)=>{
    setselectedAlubum(id);
    setShowPhoto(true);
  }
 
  return (
    <div>
          <h1>Albums for user </h1>
          <div  className='table-container'>
           <table>
                      <thead>
                                   <tr>
                                          <th>Id</th>
                                          <th>Name</th>
                                          <th>Title</th>
                                   </tr>
                      </thead>
           
          {
            albums.map((album) => {
              return (
                <tbody key={album.id}>
                    <tr>
                         <td>{album.id}</td>
                         <td>{name}</td>
                         <td><a href='#' onClick={()=>handleClick(album.id)} className='anchor-link'>{album.title}</a></td>
                     </tr>
                </tbody>
              );
            })
          }
          </table>
        </div>
            {showPhoto && <SelectedPhotos selectedAlubum={selectedAlubum}/>}
    </div>
  )
}

export default UserAlbums;

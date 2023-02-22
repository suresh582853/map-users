import React,{useEffect,useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom";

const GoogleMaps = () => {

  const [usersData,setUsersData]=useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect(()=>{
    const fetchdata= async()=>{
      
       const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/'
      );
      const data = await response.json();
      setUsersData(data);
    };
    
    fetchdata();
  },[])

  const renderMarkers = (map, maps) => {

    let marker=[];

   for(let i=0;i<usersData.length;i++) 
   {
    let users=usersData[i];
    marker.push( new maps.Marker({
      position: { lat: parseFloat(users.address.geo.lat), lng:  parseFloat(users.address.geo.lng) },
      map,
      title: users.username,
    }));
    marker[i].addListener('click', function () {
      
      setSelectedUser(users);
  });
   }
   
    return marker;

  };

 
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBRTfKUigunkP3WvYPA9YeNn3P8FGmKPi0' }}
        defaultCenter={{ lat: -37.3159, lng: 81.1496 }}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
      </GoogleMapReact>
      {selectedUser && (
        <div className="popup">
           <div className="popup-content">
               <p>username:{selectedUser.username}</p>
               <p>email:{selectedUser.email}</p>
               <p>address:{selectedUser.address.street}</p>
               <p>{selectedUser.address.suite}</p>
               <p>{selectedUser.address.city}</p>
               <p>{selectedUser.address.zipcode}</p>
               <Link className="anchor-link" to={`/useralbums?userid=${selectedUser.id}&name=${selectedUser.username}`}><p>AlbumView</p></Link>
               <button onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMaps;
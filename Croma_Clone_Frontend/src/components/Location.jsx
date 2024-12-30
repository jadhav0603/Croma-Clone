import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../css/profile.css';

function Location() {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    function successCallback(position) {
      const { latitude, longitude } = position.coords;

      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=1c09c463ed7d432db20a1968c7ef2767`)
        .then(response => response.json())
        .then(data => {
          const locationComponents = data.results[0].components;
          const city = locationComponents.city || locationComponents.town || locationComponents.village || '';
          const pincode = locationComponents.postcode || '';
          setLocation(`${city}, ${pincode}`);
          console.log(locationComponents);
        })
        .catch(error => console.error('Error fetching location:', error));
    }

    function errorCallback() {
      setLocation('Unable to fetch location');
    }
  }, []);

  return (
    <div className="location">
      <FontAwesomeIcon icon={faLocationDot} style={{ width: '2vw' }} />
      <span style={{fontSize:'1vw'}}>{location}</span>
    </div>
  );
}

export default Location;

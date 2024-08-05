import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ apiKey }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (apiKey) {
      axios.get('https://api.flexhire.com/api/v2/profile', {
        headers: { 'FLEXHIRE-API-KEY': `${apiKey}` }
      })
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile:', error));
    }
  }, [apiKey]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <img src={profile.currentUser.avatarUrl} alt={`${profile.currentUser.name}'s avatar`} />
      <h1>{profile.currentUser.name}</h1>
    </div>
  );
};

export default Profile;
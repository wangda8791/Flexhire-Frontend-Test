import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PROFILE } from '../queries';
import { useApolloClient } from '../ApolloContext';

const Profile = () => {
  const [apiKey, setApiKey] = useState('');
  const { updateClient } = useApolloClient();
  const [getProfile, { loading, data, error }] = useLazyQuery(GET_PROFILE);

  useEffect(() => {
    if (apiKey) {
      updateClient(apiKey);
      getProfile();
    }
  }, [apiKey, updateClient, getProfile]);

  const handleFetchProfile = () => {
    getProfile();
  };

  return (
    <div>
      <h1>Profile</h1>
      <input 
        type="text" 
        placeholder="Enter API Key" 
        value={apiKey} 
        onChange={(e) => setApiKey(e.target.value)} 
      />
      <button onClick={handleFetchProfile}>Fetch Profile</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <img src={data.currentUser.avatarUrl} alt="Avatar" />
          <h2>{data.currentUser.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
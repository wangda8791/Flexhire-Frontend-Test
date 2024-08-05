import React, { useState } from 'react';
import ApiKeyForm from './components/ApiKeyForm';
import Profile from './components/Profile';

const App = () => {
  const [apiKey, setApiKey] = useState('');

  return (
    <div>
      <h1>Flexhire Profile Viewer</h1>
      <ApiKeyForm setApiKey={setApiKey} />
      {apiKey && <Profile apiKey={apiKey} />}
    </div>
  );
};

export default App;
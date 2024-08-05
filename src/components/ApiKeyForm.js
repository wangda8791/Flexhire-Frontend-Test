import React, { useState } from 'react';

const ApiKeyForm = ({ setApiKey }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiKey(key);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Flexhire API Key:
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApiKeyForm;
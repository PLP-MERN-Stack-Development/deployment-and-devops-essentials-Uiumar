import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message));
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>My MERN App</h1>
      <p>Message from backend: {msg}</p>
    </div>
  );
}

export default App;

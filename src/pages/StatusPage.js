import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StatusPage() {
//   const apiUrl = process.env.REACT_APP_SIMPLEDUNGEON_API_URL;
    const apiUrl = 'http://localhost:3080';

    const [apiAlive, setApiAlive] = React.useState('');
    const [dbAlive, setDbAlive] = React.useState('');

  useEffect(() => {  
    axios.get(`${apiUrl}/aliveapi`)
      .then(response => setApiAlive(response.data))
      .catch(error => setApiAlive(`API Error: ${error.message}`));

    axios.get(`${apiUrl}/alivedb`)
      .then(response => setDbAlive(response.data))
      .catch(error => setDbAlive(`DB Error: ${error.message}`));
  }, []);

  return (
    <div>
      <p>API URL: {apiUrl}</p>
      <p>API Status: {apiAlive}</p>
      <p>Database Status: {dbAlive}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default StatusPage;

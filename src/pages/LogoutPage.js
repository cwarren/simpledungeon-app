import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LogoutPage() {
  return (
    <div>
      <p>Logout</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default LogoutPage;

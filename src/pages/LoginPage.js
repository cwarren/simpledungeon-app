import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  return (
    <div>
      <p>Login</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default LoginPage;

import React from 'react';
import UseAuth from './UseAuth';

function Dashboard({ code }) {
  const accessToken = UseAuth(code);

  return <div>{code}</div>;
}

export default Dashboard;

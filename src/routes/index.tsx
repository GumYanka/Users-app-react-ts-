import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../pages/Users';
import EditUser from '../pages/EditUser';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/edit/:userId" element={<EditUser />} />
    </Routes>
  );
}

export default AppRoutes;
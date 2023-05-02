import React from 'react';
import { useSelector } from 'react-redux';
import PublicNavbar from './Public/PublicNavbar';
import AdminNavbar from './Admin/AdminNavbar';

const Navbar = () => {
  // Get user from store
  const state = useSelector((state) => state?.users);
  const { userAuth } = state;
  const isAdmin = userAuth?.isAdmin;
  return (
    <>
      {isAdmin ? (
        <AdminNavbar />
      ) : userAuth ? (
        <AdminNavbar />
      ) : (
        <PublicNavbar />
      )}
    </>
  );
};

export default Navbar;

import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink to="/" activeClassName="is-active" exact={true} >Go Home</NavLink> &nbsp;
      <NavLink to="/add-person" activeClassName="is-active" >Add Person</NavLink>
    </>
  );
};

export default Header;
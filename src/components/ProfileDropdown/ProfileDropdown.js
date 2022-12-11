import React from 'react';
import './ProfileDropdown.css'

const ProfileDropdown = () => {
  return (
    <div>
      <ul className='d-flex flex-column gap-2 dropdownProfile'>
        <li>Log In</li>
        <li>Sign Up</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
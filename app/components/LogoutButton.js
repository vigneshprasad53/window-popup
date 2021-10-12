import React from 'react';
import { signOut } from '../utils/googleOAuth'

const LogoutButton = () => {
    return (
        <button onClick={signOut}>Logout</button>
    );
};

export default LogoutButton;
import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {



    const googleAuth = useGoogleLogin({
        clientId: "720827851162-tg2mm1ebvjrahls00ki2h045qbsu14lh.apps.googleusercontent.com", // Your clientID from Google.
    })

    return (
        <GoogleAuthContext.Provider value={googleAuth}>
            {children}
        </GoogleAuthContext.Provider>
    )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)


export const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
        auth2.signOut().then(
            auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL'))
        )
    }
}
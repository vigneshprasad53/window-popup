import React, { useEffect } from 'react'
import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { useGoogleAuth } from "../../../utils/googleOAuth";
import LoginButton from '../../../components/LoginButton';
import LogoutButton from '../../../components/LogoutButton';

const loginAlignment = {
    margin: '35% '
}


export const Login = (props) => {



    const { isSignedIn } = useGoogleAuth();

    useEffect(() => {
        if (isSignedIn) props.history.push('/')
    }, [])



    return (
        <div style={!isSignedIn ? loginAlignment : {}}>
            {!isSignedIn && <LoginButton />}
            {isSignedIn && <LogoutButton />}
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))

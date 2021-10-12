import React from 'react'

export default function Home() {
    return (
        <div>
            1. Create a login page, on click of login use gmail or facebook API to allow user to login.<br />
            2. Once logged in, display user details(which you get from facebook or gmail) at the center of the page.<br />
            Right top - User name will be displayed - on click of user name, the logout option will be there for the user to logout from the current session.<br />
            3. Create two components and use react router to render those components based on the router path(user name should be displayed right top with logout option in every page)<br />
            The first component will have some static table data<br />
            The second component will have some json data.<br />
            4. Enable the idle timeout of 60 seconds for the logged in user. After 59 seconds, the prompt will get enabled for the user with message "Do want to continue?" with "Continue" button.<br />
            if there is no user response, then automatic logout should happen after 60 seconds.<br />




        </div>



    )
}

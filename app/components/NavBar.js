
import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";

import Login from '../containers/App/Login/Login';

import { TabMenu } from 'primereact/tabmenu';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";
import 'primeflex/primeflex.css';

const NavBar = (props) => {
    const { googleUser } = props
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        props.history.push(items[activeIndex].component)
    }, [activeIndex])

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', component: '/' },
        { label: 'Users', icon: 'pi pi-fw pi-android', component: '/users' },
        { label: 'Comments', icon: 'pi pi-fw pi-pencil', component: '/comment' },

    ];
    return (
        <div>
            <div className="p-grid p-align-center">
                <div className="p-col-9">
                    <div className="card">
                        <TabMenu
                            model={items}
                            activeIndex={activeIndex}
                            onTabChange={(e) => setActiveIndex(e.index)}
                        />
                    </div>
                </div>

                <div className="p-col-2">
                    {googleUser.profileObj.name && <p>{googleUser.profileObj.name}</p>}
                </div>

                <div className="p-col-1">
                    <Login />
                </div>

            </div>
        </div>
    );
}



export default withRouter(NavBar)
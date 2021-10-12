import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import injectReducer from '../../../utils/injectReducer'
import injectSaga from '../../../utils/injectSaga'
import * as actions from './actions'
import reducer from './reducer'
import saga from './saga'

import { selectUsers } from './selectors'


export const Users = (props) => {
    const { users, getUsersRequest } = props;

    useEffect(() => {
        if (users.length === 0) getUsersRequest()
    }, []);

    return (
        <div>
            <div className="card">
                <DataTable value={users} stripedRows>
                    <Column field="id" header="ID" ></Column>
                    <Column field="name" header="Name" ></Column>
                    <Column field="phone" header="Phone"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="website" header="Website"></Column>
                </DataTable>
            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    users: selectUsers()
})

const mapDispatchToProps = dispatch => ({
    getUsersRequest: () => dispatch(actions.getUsersRequest())
})

const key = 'users';
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key, reducer })
const withSaga = injectSaga({ key, saga })

export default compose(withConnect, withReducer, withSaga)(Users)






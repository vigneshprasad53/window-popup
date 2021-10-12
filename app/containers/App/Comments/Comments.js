import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import injectReducer from '../../../utils/injectReducer'
import injectSaga from '../../../utils/injectSaga'
import * as actions from './actions'
import reducer from './reducer'
import saga from './saga'
import { selectComments } from './selector'

export const Comments = (props) => {
    const { comment, getCommentRequest } = props
    const [commentId, setCommentId] = useState(0);

    const handleSubmit = () => {
        getCommentRequest(commentId)
    }

    const handleClear = () => {
        setCommentId(0)
    }

    return (
        <div>

            <div className="p-grid p-align-center">
                <div className="p-col">
                    <InputText type='number' value={commentId} onChange={(e) => setCommentId(e.target.value)} />
                </div>

            </div>
            <div className="p-grid p-align-center">
                <div className="p-col">
                    <Button label="Submit" onClick={(e) => { handleSubmit(e) }} />
                </div>
            </div>

            <div className="p-grid p-align-center">
                <div className="p-col">
                    {comment.length > 0 && commentId > 0 &&
                        <div>
                            <div className="card">
                                <DataTable value={comment} stripedRows>
                                    <Column field="userId" header="User Id" ></Column>
                                    <Column field="id" header="Comment Id" ></Column>
                                    <Column field="title" header="Title"></Column>
                                    <Column field="body" header="Comment"></Column>
                                </DataTable>
                            </div>

                        </div>
                    }
                </div>
            </div>

            {comment.length > 0 && commentId > 0 &&
                <div className="p-grid p-align-center">
                    <div className="p-col">
                        <Button label="Clear" onClick={(e) => { handleClear(e) }} />
                    </div>
                </div>
            }

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    comment: selectComments()
})

const mapDispatchToProps = dispatch => ({
    getCommentRequest: (payload) => dispatch(actions.getCommentRequest(payload))
})

const key = 'comments';
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key, reducer })
const withSaga = injectSaga({ key, saga })

export default compose(withConnect, withReducer, withSaga)(Comments)
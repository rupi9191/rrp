import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Alert from 'react-bootstrap/lib/Alert';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import serialize from 'form-serialize';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import {LeftPane, RightPane} from '../HOC';

class EmployeeHomeComponent extends Component {
    constructor() {
        super();
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>
                <LeftPane>
                    <h1>Referrals</h1>
                    <hr/>
                    <Panel>
                       <Table striped bordered hover fill responsive className='table-commissions'>
                            <thead>
                                <th>Name</th>
                                <th>JobName</th>
                                <th>status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rupesh</td>
                                    <td>Sofware Developer</td>
                                    <td>Passed</td>
                                </tr>
                            </tbody>
                       </Table>
                   </Panel>
                </LeftPane>
                <RightPane>
                    <h1>Jobs:</h1>
                    <hr/>
                    <Panel>
                       <ul>
                          <li>Tester</li>
                          <li>Software Developer</li>
                       </ul>
                   </Panel>
                </RightPane>
            </div>
        )
    }
}

export default EmployeeHomeComponent;

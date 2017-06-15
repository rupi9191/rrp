import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Alert from 'react-bootstrap/lib/Alert';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import serialize from 'form-serialize';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

class LoginComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="loginContainer">
              <form className="loginForm" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="email"
                            placeholder="UserName"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                    <Button type="submit" className="btn-danger">Login</Button>
                    <a href="#/register">Signup</a>
              </form>
            </div>
        )
    }
}

export default LoginComponent;

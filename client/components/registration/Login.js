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

    handleSubmit(e) {
        e.preventDefault();
        const filters = serialize(e.target, { hash: true });

        this.props.actions.doLogin(filters)
        .then((res) => {
            if (res.token){
                window.localStorage.setItem('authorization', res.token);
            }
            window.location.href = '#/home';
        });
    }

    render() {
        return (
            <div className="loginContainer">
              <form className="loginForm" onSubmit={::this.handleSubmit}>
                    <FormGroup>
                        <FormControl
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="password"
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

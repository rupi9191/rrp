import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Alert from 'react-bootstrap/lib/Alert';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import serialize from 'form-serialize';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

class RegisterComponent extends Component {
    constructor() {
        super();
    }

    handleSubmit(e) {
        e.preventDefault();
        const filters = serialize(e.target, { hash: true });

        this.props.actions.doRegister(filters);
    }

    render() {
        return (
            <div className="loginContainer">
              <form className="registrationForm" onSubmit={::this.handleSubmit}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="firstName"
                            placeholder="firstName"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="lastName"
                            placeholder="lastName"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            name="type"
                            componentClass="select"
                            defaultValue="0"
                        >
                            <option value="0">Employee</option>
                            <option value="1">HR</option>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit" className="btn-danger">Register</Button>
              </form>
            </div>
        )
    }
}

export default RegisterComponent;

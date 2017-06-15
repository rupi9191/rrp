import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FullPane } from '../components/HOC';
import LoginComponent from '../components/registration/login'

class LoginContainer extends Component {

    render() {
        return (
            <LoginComponent {...this.props}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        type: ownProps.type,
        isFetching: state.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

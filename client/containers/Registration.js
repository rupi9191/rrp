import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FullPane } from '../components/HOC';
import RegisterComponent from '../components/registration/Register'
import * as registrationActions from '../actions/registration';

class RegistrationContainer extends Component {

    render() {
        return (
            <RegisterComponent {...this.props}/>
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
    const combinedActionCreators = Object.assign(
        {},
        registrationActions
    );

    return {
        actions: bindActionCreators(combinedActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);

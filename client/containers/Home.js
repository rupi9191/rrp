import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EmployeeHome from '../components/employee/Home';


class HomeContainer extends Component {

    componentWillMount() {
    }

    getComponent() {
        const { empType } = this.props.user;

        if (empType == 1) {
            return;
        } else {
            return (<EmployeeHome {...this.props}/>);
        }
    }

    render() {

        return (
            <div>
                {::this.getComponent()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.isFetching,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

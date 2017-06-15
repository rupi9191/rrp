import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import { I18n } from 'react-redux-i18n';


import BodyComponent from '../components/Body';
import HeaderComponent from '../components/Header';



class AppContainer extends Component {

    componentWillMount() {
    }

    render() {
        const alertConfig = {
            position: 'top-right',
            effect: 'slide',
            timeout: 'none',
            offset: 50,
            html: true,
            stack: {limit: 1}
        };

        return (
            <div>
                <HeaderComponent {...this.props}/>
                <BodyComponent
                    children={this.props.children}
                    pathname={this.props.location.pathname}
                    {...this.props}
                />
                <Alert {...alertConfig} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

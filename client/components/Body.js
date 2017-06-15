import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import classNames from 'classnames';

import { PageHeaderBar,  FullPane } from '../components/HOC';


class BodyComponent extends Component {

    constructor() {
        super();
        this.showClass = 'show';
        this.hiddenClass = 'hidden';
        this.isLocationDiff = false;
    }

    componentWillReceiveProps(nextProps) {
        this.isLocationDiff = nextProps.pathname !== this.props.pathname;
    }

    componentDidUpdate() {
        const overlay = ReactDOM.findDOMNode(this.overlay);

        // hiding shown loader in previous page when going to different page, if any
        // simply close alert, if any
        if (this.isLocationDiff) {
            Alert.closeAll();

            if (overlay.classList && overlay.classList.contains(this.showClass)) {
                this.props.dismissLoader();
            }
        }
    }

    render() {
        const { isFetching, children } = this.props;
        const visibility = classNames({
            [this.showClass]: isFetching,
            [this.hiddenClass]: !isFetching
        });


        return (
            <div>
                <Grid className='container-header'>
                    <Row>
                        <FullPane>
                      
                        </FullPane>
                    </Row>
                </Grid>
                <Grid className='container-body'>
                    <Row>
                        {children}

                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // reassign the header to unknown page key when not found
    if (ownProps.children.props.route.path === '*') {
        header = 'header.unknown';
    }

    return {
        isFetching: state.isFetching
    };
};

export default connect(
    mapStateToProps
)(BodyComponent);

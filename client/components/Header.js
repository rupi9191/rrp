import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { I18n } from 'react-redux-i18n';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import { FaStackIcon } from './HOC';
import { LOCALE_STORAGE_KEY, LOCALES, NAV_LIST } from '../constants';

export default class HeaderComponent extends Component {
    componentDidMount() {

    }


    getMenuNav() {
        let items = [];
        let navLink;

        navLink = (
            <LinkContainer key={index} to={`/${nav.href}`}>
                <NavItem eventKey={nav.eventKey}>{I18n.t(nav.label)}</NavItem>
            </LinkContainer>
        );

        items.push(navLink);


        return items;
    }


      render() {
        return (
            <div>
                <Grid className='container-header'>
                    <Row className="container-header-navbar">
                        <Col lg={12} md={12}>
                            <Navbar inverse fixedTop id='navbar-fixed-top'>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <span className="vertical-center-helper" />
                                        <Link to="/" title="">
                                            <img src="assets/images/rakuten-gap-logo.png" height="32"/>
                                            <span>RRP</span>
                                        </Link>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav pullLeft id="navbar-nav">
                                        <IndexLinkContainer to="/">
                                            <NavItem>{I18n.t('nav.home')}</NavItem>
                                        </IndexLinkContainer>
                                        <LinkContainer to={`/profile`}>
                                            <NavItem>Profile</NavItem>
                                        </LinkContainer>
                                    </Nav>

                                    <Nav pullRight>
                                        <NavDropdown
                                            title={<FaStackIcon iconName="fa-user" />}
                                            id="settings-nav-dropdown">

                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Grid>
                <div className="container-header-topbar-wrapper">
                    <Grid>
                        <Row className="container-header-topbar">
                            <Col lg={12} md={12}>
                                <div className="clearfix">
                                    <span className="pull-right" />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

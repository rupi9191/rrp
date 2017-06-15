/**
 * This is to serve as reusable `stub` components in containers/components
 */

import React from 'react';
import { Link } from 'react-router';
import { I18n } from 'react-redux-i18n';

import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';

/**
 * Check and display input field's error message when applicable.
 *
 * @param  {Object} field Field input object
 * @return {Mixed}       Error markup
 */
const checkDisplayError = (field) => {
    return (
        field.meta.touched &&
        field.meta.error &&
        <span className='error'>{field.meta.error}</span>
    );
};

/**
 * Field group for form input.
 *
 * @param {String} id    Field input ID
 * @param {String} label Field input label
 * @param {String} help  Field input help block text-muted
 * @param {Oject} props the props
 */
export const FieldGroup = ({ id, label, help, ...props }) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};

/**
 * Field group wrapper for addon input (both before & after)
 *
 * @param {String} [label='Label']  Input label
 * @param {String} [addonBefore=''] Input before addon text
 * @param {String} [addonAfter='']  Input after addon text
 * @param {String} [help='']        Help block text
 * @param {[type]} field            The input field properties
 */
export const FieldGroupAddonBoth = ({
    label='Label',
    addonBefore='',
    addonAfter='',
    help='',
    ...field
}) => {
    return (
        <FormGroup>
            <ControlLabel htmlFor={field.input.name}>{label}</ControlLabel>
            <InputGroup>
                <InputGroup.Addon>{addonBefore}</InputGroup.Addon>
                <FormControl {...field.input} {...field.attr} />
                <InputGroup.Addon>{addonAfter}</InputGroup.Addon>
            </InputGroup>
            {checkDisplayError(field)}
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};

/**
 * Field group wrapper for addon input (before)
 *
 * @param {String} [label='Label'] Input label
 * @param {String} [addon='']      Input addon text
 * @param {String} [help='']       Help block text
 * @param {[type]} field           The input field properties
 */
export const FieldGroupAddonBefore = ({
    label='Label',
    addon='',
    help='',
    ...field
}) => {
    return (
        <FormGroup>
            <ControlLabel htmlFor={field.input.name}>{label}</ControlLabel>
            <InputGroup>
                <InputGroup.Addon>{addon}</InputGroup.Addon>
                <FormControl {...field.input} {...field.attr} />
            </InputGroup>
            {checkDisplayError(field)}
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};

/**
 * Field group wrapper for addon input (before)
 *
 * @param {String} [label='Label'] Input label
 * @param {String} [addon='']      Input addon text
 * @param {String} [help='']       Help block text
 * @param {[type]} field           The input field properties
 */
export const FieldGroupAddonAfter = ({
    label='Label',
    addon='',
    help='',
    ...field
}) => {
    return (
        <FormGroup>
            <ControlLabel htmlFor={field.input.name}>{label}</ControlLabel>
            <InputGroup>
                <FormControl {...field.input} {...field.attr} />
                <InputGroup.Addon>{addon}</InputGroup.Addon>
            </InputGroup>
            {checkDisplayError(field)}
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};

/**
 * Render the page header with proivided content and breadcrumbs, if any.
 *
 * @param {String} [content='']  Page header content
 * @param {Array}  [breadcrumbs=[]] Page header breadcrumbs
 * @param {Object} props         the props
 */
export const PageHeaderBar = ({ content = '', breadcrumbs = [], ...props }) => {
    let breadcrumbLink;

    return (
        <PageHeader>
            {content}
            {breadcrumbs.length > 0 &&
                <div className="header-breadcrumbs pull-right">
                    <Breadcrumb>
                        <Breadcrumb.Item  key={0.0} href={'#/'} >
                            {I18n.t('nav.home')}
                        </Breadcrumb.Item>
                        {
                            (
                                breadcrumbs.map((breadcrumb, index) => {
                                    if (breadcrumb.href === undefined) {
                                        breadcrumbLink = (
                                            <Breadcrumb.Item  key={index} active >
                                                {(breadcrumb.icon)
                                                  ? <i className={`fa fa-fw ${breadcrumb.icon}`} />
                                                  : ''}
                                                {I18n.t(breadcrumb.text)}
                                            </Breadcrumb.Item>
                                        );
                                    } else {
                                        breadcrumbLink = (
                                            <Breadcrumb.Item  key={index} href={breadcrumb.href} >
                                                {(breadcrumb.icon)
                                                  ? <i className={`fa fa-fw ${breadcrumb.icon}`} />
                                                  : ''}
                                                {I18n.t(breadcrumb.text)}
                                            </Breadcrumb.Item>
                                        );
                                    }

                                    return breadcrumbLink;
                                })
                            )
                        }
                    </Breadcrumb>
                </div>}
        </PageHeader>
    );
};

/**
 * Full pane of page content.
 *
 * @param {String} [content=''] The content to be rendered
 * @param {Object} props        The props
 */
export const FullPane = ({ content = '', ...props }) => {
    return (
        <Col md={12} className="full-pane-wrapper">
            {props.children}
        </Col>
    );
};

/**
 * Left pane.
 *
 * @param {String} [content=''] the content to be rendered
 * @param {Object} props        the props
 */
export const LeftPane = ({ content = '', ...props }) => {
    return (
        <Col md={8} className="left-pane-wrapper">
            {content}
        </Col>
    );
};

/**
 * Right pane.
 *
 * @param {String} [content=''] the content to be rendered
 * @param {Object} props        the props
 */
export const RightPane = ({ content = '', ...props }) => {
    return (
        <Col md={4} className="right-pane-wrapper">
            {content}
        </Col>
    );
};

/**
 * Return stack circle icon based on the fa-xxx name
 *
 * @param {String} [iconName=''] the fa icon name
 * @param {Object} props         the props
 */
export const FaStackIcon = ({ iconName = '', ...props }) => {
    return (
        <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x" />
            <i className={`fa ${iconName} fa-stack-1x fa-inverse`} />
        </span>
    );
};

/**
 * Tag label with fa icon.
 *
 * @param {String} [labelName=''] The tag name.
 * @param {Object} props          The props
 */
export const TagLabel = ({ labelName = '', ...props }) => {
    return (
        <Label bsStyle="default" className="tag-label">
            <i className="fa fa-fw fa-tag" />
            {labelName}
        </Label>
    );
};

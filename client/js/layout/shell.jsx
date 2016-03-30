import React from 'react';
import { Link } from 'react-router';
import {
    Navbar,
    Nav,
    NavbarHeader,
    NavbarBrand,
    NavBarToggle,
    NavBarCollapse,
    NavItem
} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const ShellComponent = (props) => {
    return (
        <div>
            <Navbar staticTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/dc-campaign-finance-watch/client/">
                            DC Campaign Finance
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav eventKey={1}>
                        <IndexLinkContainer to="/dc-campaign-finance-watch/client/">
                            <NavItem eventKey={1.1}>Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/dc-campaign-finance-watch/client/about">
                            <NavItem eventKey={1.2}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/dc-campaign-finance-watch/client/faq">
                            <NavItem eventKey={1.3}>FAQ</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="http://www.codefordc.org" className="code-for-dc-logo">
                            <img src="dc-campaign-finance-watch/client/images/logo_100px.png" alt="Code For DC"/>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
                <img src="dc-campaign-finance-watch/client/images/dc_flag.svg" className="background"/>
                {props.children}
            </div>
        </div>
    );
};

export default ShellComponent;

import React, { Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

class AppNavbar extends Component{
    state = {
        isOpen: false
    }

    tooggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href ="/categories/">Categories    </NavbarBrand>
                    <NavbarBrand href ="/products/">Products     </NavbarBrand>
                    {/* <NavbarBrand href ="/categories">Categories</NavbarBrand> */}
                    <NavbarBrand href ="/update/">Api</NavbarBrand>
                    <NavbarToggler onClick={this.tooggle} />
                        <Collapse isOpen={this.state.isOpen}  navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    {/* <NavLink href="https://www.google.com/">google</NavLink> */}
                                </NavItem>
                            </Nav>
                        </Collapse>
                 </Container>
            </Navbar>
        </div>    
        );
    }
}

export default AppNavbar
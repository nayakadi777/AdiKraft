import React , {Component }  from 'react';
import './HeaderComponent.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            toggle:false,
            isOpen:false
        }
    }
    render(){
        return(
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="Header" href="/">
            <Logo className='logo' />
                AdiKraft
        </NavbarBrand>
        <NavbarToggler onClick={this.state.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Shop</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="/shop">Sign In</NavLink>
          <NavbarText>Cart</NavbarText>
        </Collapse>
      </Navbar>
    </div>
        )
    }
}
export default Header;
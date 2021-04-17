import React from 'react';
import styled, {css} from 'styled-components';
// import logo from '../assets/logo_zing_rust.png';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
// cores que possam ser usadas
// #3862D6
const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #39363a;
`;

const NavLink = css`
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
color: #fff;
    
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;



const MenuBars = styled.i``;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -40px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink};
    padding-left: 90px;

`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
   
`;

const Navbar = () => {
    return(
        <Nav>
            {/* <Link to="/"> */}
            {/* <img src={logo} className="logotipo" alt="Logo" to="/" style={{ 
    width: '50px',
    height: '40px'}} /> */}
            {/* </Link> */}
            {/* Caso queira colocar a logo com o nome é isso aqui */}
            <Logo to="/" className="nomeLogo" >Consorcio Consorplan</Logo>
            <MenuBars />
            <NavMenu>
                {MenuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn className="ContactButton">
                <Button  to='/contact' primary="true">Contato</Button> 
            </NavBtn>
        </Nav>
    )
}

export default Navbar;
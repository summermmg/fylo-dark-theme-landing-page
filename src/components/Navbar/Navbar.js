import React, { useState } from 'react';
import { StyledNav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink } from './Navbar.styles';
import { FaTimes, FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(prev => !prev)
    }
    return (
        <IconContext.Provider value={{ color: 'hsl(0, 0%, 100%)' }}>
            <StyledNav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        Fylo
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {open ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} open={open}>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Team</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </StyledNav>
        </IconContext.Provider>
    )
}

export default Navbar;
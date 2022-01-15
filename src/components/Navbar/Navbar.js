import React, { useState, useEffect } from 'react';
import { 
    StyledNav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLink,
    NavItemBtn,
    NavBtnLink 
} from './Navbar.styles';
import { FaTimes, FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { StyledButton } from '../Global';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setOpen(prev => !prev);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

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
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <StyledButton primary>SIGN-UP</StyledButton>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <StyledButton fontBig big primary>
                                        SIGN-UP
                                    </StyledButton>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </StyledNav>
        </IconContext.Provider>
    )
}

export default Navbar;
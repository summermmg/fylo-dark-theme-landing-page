import styled from 'styled-components';
import { Container } from '../Global';
import { Link } from 'react-router-dom';
import { ImStack } from 'react-icons/im';

export const StyledNav = styled.nav`
    background: hsl(218, 28%, 13%);
    color: hsl(0, 0%, 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

// Inherit global Container
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: hsl(0, 0%, 100%);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const NavIcon = styled(ImStack)`
    margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        transform: translate()(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        /* show mobile menu when clicking the icon */
        left: ${({open}) => open ? 0 : '-100%'};
        background: hsl(218, 28%, 13%);
        opacity: 1;
        transition: all 0.5s ease;
    }
`

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid hsl(0, 0%, 100%);
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`

export const NavLink = styled(Link)`
    color: hsl(0, 0%, 100%);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    }
`
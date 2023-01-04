import React, {useCallback, useRef, useState} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";

function Navigation(props) {
    const [navOpen, setNavOpen] = useState(false);

    const buttonRef = useRef()
    const openNavRef = useRef()

    const outsideHandler = useCallback(() => {
        setNavOpen(false)
    }, [navOpen])


    useOutsideClick([buttonRef, openNavRef], outsideHandler)

    // Theme toggle
    const [darkTheme, setDarkTheme] = useState(false);

    return (<>
        <header className="primary-header">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="navigation-left">

                        <p className="fw-medium fs-500 | logo">
                            <NavLink to={'/'} className={({isActive}) => {
                                return isActive ? "logo__active" : undefined
                            }}>
                                Some Logo

                            </NavLink>
                        </p>
                        <div className="desktop-info">

                            <Link to={'/about'}>
                                <p className="fw-light fs-400">About</p>

                            </Link>
                            <a href="https://github.com/t3nna">
                                <p className="fw-light fs-400">Source</p>

                            </a>
                        </div>


                    </div>

                    <div className="navigation-right">


                        <div className="theme-toggle" onClick={() => setDarkTheme(prevState => {
                            // toggleTheme()
                            return !prevState
                        })}>

                            <button className={`sun-button ${!darkTheme && 'theme-active'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6 toggle-icons sun-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                </svg>
                            </button>
                            <button className={`moon-button ${darkTheme && 'theme-active'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6 toggle-icons moon-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                </svg>
                            </button>

                        </div>
                        <button
                            className="nav-toggle theme-border theme-wrapper-color"
                            aria-controls="primary-navigation"
                            aria-expanded={navOpen}
                            onClick={() => setNavOpen(!navOpen)}
                            ref={buttonRef}
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                 className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48"
                                      d="M88 152h336M88 256h336M88 360h336"/>
                            </svg>
                            <span className="visually-hidden">Menu</span>
                        </button>
                        <nav className="primary-navigation" id="primary-navigation" data-visible={navOpen}
                             ref={openNavRef}>
                            <ul aria-label="Primary" className="nav-list">
                                <li className="nav-list__info">Categories</li>
                                <li><NavLink to={'/categories/desk'}
                                             className={({isActive}) => {
                                                 return isActive ? "nav-list__active" : undefined
                                             }}
                                             onClick={() => setNavOpen(false)}
                                >getUsers</NavLink></li>
                                <li><NavLink
                                    to={'categories/backpack'}
                                    className={({isActive}) => {
                                        return isActive ? "nav-list__active" : undefined
                                    }}
                                    onClick={() => setNavOpen(false)}
                                >getFirstUser</NavLink></li>
                                <li className={'mobile-info'}>
                                    <NavLink to={'categories/hobby'}
                                             className={({isActive}) => {
                                                 return isActive ? "nav-list__active" : undefined
                                             }}
                                             onClick={() => setNavOpen(false)}
                                >
                                    About
                                    </NavLink>
                                </li>

                                <li className={'mobile-info'}>
                                    <a href={'https://github.com/t3nna'}>
                                    Source
                                    </a>
                                </li>

                            </ul>


                        </nav>
                    </div>

                </div>
            </div>
        </header>
        <Outlet context={{hello: 'World'}}/>
    </>);
}

export default Navigation;
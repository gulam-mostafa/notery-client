import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PageNav = () => {
    return (
        <div className='bg-violet-400'>
            <div className=''>
                <Navbar
                    fluid={true}
                    rounded={true}
                    className='bg-violet-400'
                >
                    <Navbar.Brand href="/">

                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Notary
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 ">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" img="" rounded={true} />}
                        >


                            <Dropdown.Item>
                                <Link to='/'>   Home</Link>
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <NavLink
                            to="/"
                            active={true}
                            className="text-2xl hover:text-red-700"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/output"
                            active={true}
                            className="text-2xl hover:text-red-700"
                        >
                            Data
                        </NavLink>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default PageNav;
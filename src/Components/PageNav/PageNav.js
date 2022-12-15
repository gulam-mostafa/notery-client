import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNav = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                  
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Notary
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
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
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default PageNav;
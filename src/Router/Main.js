import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../Components/PageFooter/PageFooter';
import PageNav from '../Components/PageNav/PageNav';

const Main = () => {
    return (
        <div>
            <div className=' '>
                <PageNav></PageNav>
               
                <Outlet>
          
                </Outlet>
            </div>
       
        </div>
    );
};

export default Main;
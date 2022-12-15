import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { UseContextProvider } from '../contexts/StepperContext';
import { Routes } from '../Router/Routes';
import Home from './Home/Home';
import PageFooter from './PageFooter/PageFooter';
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import Account from './steps/Account';
import Details from './steps/Details';
import Final from './steps/Final';
import Payment from './steps/Payment';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Mainpage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [account, setAccount] = useState('')
    const [postData, setPostData] = useState({})
    console.log(account)
    console.log(postData)
    const steps = [
      "Step 1",
      "Step 2",
      "Step 3",
      "Done",
    ];
  
  
    const displayStep = (step) => {
      switch (step) {
        case 1:
          return <Account setAccount={setAccount} />;
        case 2:
          return <Details setAccount={setAccount} />;
        case 3:
          return <Payment setAccount={setAccount} />;
        case 4:
          return <Final postData={postData} />;
        default:
      }
    };
    const addUser = () => {
        console.log('button click')
        fetch('https://notery-server.vercel.app/users', {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ account, createdAt: new Date().toISOString() })
        })
          .then(res => res.json())
          .then(data => {
    
            setPostData(data)
    
    
    
    
          })
    
      }
    
    
      const handleClick = (direction) => {
        let newStep = currentStep;
    
        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
      };
    

    return (
        <div>
      
        <div className="flex justify-evenly my-16">
  
  
          <div className="w-80 ml-8 ">
            <Home></Home>
          </div>
  
          <div className="mx-auto rounded-2xl bg-white pb-2 shadow-sm md:w-8/12">
            {/* Stepper */}
            <div>
              <p className="text-black text-2xl ml-4  flex items-center gap-4  "><MdKeyboardArrowLeft /> New Appointment Request</p>
              <p className="ml-14">Same great coverage for less</p>
            </div>
            <div className="horizontal container mt-5 ">
              <Stepper steps={steps} currentStep={currentStep} />
  
              <div className="my-10 p-10 ">
                <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
              </div>
            </div>
  
            {/* navigation button */}
            {currentStep !== steps.length && (
              <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
                addUser={addUser}
              />
            )}
          </div>
        </div>
        <PageFooter></PageFooter>
      </div>
    );
};

export default Mainpage;
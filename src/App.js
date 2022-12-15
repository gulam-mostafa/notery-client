import { useState } from "react"
import Home from "./Components/Home/Home.js";
import Stepper from "./Components/Stepper.jsx";
import StepperControl from "./Components/StepperControl";
import Account from "./Components/steps/Account";
import Details from "./Components/steps/Details";
import Final from "./Components/steps/Final";
import Payment from "./Components/steps/Payment";
import { UseContextProvider } from "./contexts/StepperContext";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Routes.js";
import PageFooter from "./Components/PageFooter/PageFooter.js";
import Mainpage from "./Components/Mainpage.js";


function App() {
  // const [currentStep, setCurrentStep] = useState(1);
  // const [account, setAccount] = useState('')
  // const [postData, setPostData] = useState({})
  // console.log(account)
  // console.log(postData)
  // const steps = [
  //   "Step 1",
  //   "Step 2",
  //   "Step 3",
  //   "Done",
  // ];







  // const displayStep = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <Account setAccount={setAccount} />;
  //     case 2:
  //       return <Details setAccount={setAccount} />;
  //     case 3:
  //       return <Payment setAccount={setAccount} />;
  //     case 4:
  //       return <Final postData={postData} />;
  //     default:
  //   }
  // };

  // const addUser = () => {
  //   console.log('button click')
  //   fetch('https://notery-server.vercel.app/users', {
  //     method: 'POST',
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({ account, createdAt: new Date().toISOString() })
  //   })
  //     .then(res => res.json())
  //     .then(data => {

  //       setPostData(data)




  //     })

  // }


  // const handleClick = (direction) => {
  //   let newStep = currentStep;

  //   direction === "next" ? newStep++ : newStep--;
  //   // check if steps are within bounds
  //   newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  // };

  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
     

    </div>
  );
}

export default App;

import { useStepperContext } from "../../contexts/StepperContext";
import { BsArrowRight, BsStarFill } from 'react-icons/bs';

export default function Account({ setAccount }) {
  const { userData, setUserData } = useStepperContext();



  const handleChange = (e) => {


    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
   




    setAccount({ ...userData, [name]: value ,   createdAt: new Date().toISOString()});
  };



  return (
    <div className="flex justify-between gap-2">
      <div className=" flex flex-col gap-2">
        {/* card 1  */}
        <div className="card w-96 h-38 p-2 bg-white border border-violet-500 text-black">
          <p className="font-bold text-2xl"> Notary Signing Agent</p>
          <div className="flex gap-4 justify-between">
            <p className="mb-4">Suitable for who have purchased a <br />  brand new car</p>
            <p className="text-sm"> per Year</p>
          </div>
          <button className="flex items-end font-bold justify-start gap-5">view Details < BsArrowRight /></button>
        </div>
        {/* card 2  */}
        <button className="w-96 h-38 p-2 bg-white card border border-violet-500 hover:bg-yellow-300 active:bg-Yellow-700 focus:outline-none focus:ring focus:ring-violet-500 focus:bg-yellow-300 ">
          <div className=" flex w-full  justify-between items-center">
            <p className="font-bold text-2xl"> Notary Signing Agent</p>
            <p className="flex justify-end text-violet-600 "><BsStarFill /> Popular</p>
          </div>
          <div className="flex gap-4 justify-between">
            <p className="mb-4">Suitable for who have purchased a <br />  brand new car</p>

          </div>
          <button className="flex items-end font-bold justify-start gap-5">view Details < BsArrowRight /></button>
        </button>
        {/* card 3  */}
        <div className="card w-96 h-38 p-2 bg-white border border-violet-500 text-black">
          <p className="font-bold text-2xl"> Notary Signing Agent</p>
          <div className="flex gap-4 justify-between">
            <p className="mb-4">Suitable for who have purchased a <br />  brand new car</p>
            <p className="text-sm"> per Year</p>
          </div>
          <button className="flex items-end font-bold justify-start gap-5">view Details < BsArrowRight /></button>
        </div>


      </div>
      {/* input section  */}
      <div className="card w-full border-2 shadow-lg flex flex-col ">

        <div className="">
          <h2 className="text-center font-bold text-xl my-2">Calculate your Coast for RON</h2>
          {/* input 1  */}
          <div className="flex justify-between mx-2 mt-8">
            <div className="">
              <p className="font-bold">No of Extra Signatures</p>
              <p>Please enter Zero, if only one signature is required</p>
            </div>
            <input required  onBlur={handleChange} name='sign' className="w-28" type="text" />
          </div>
          {/* input 2  */}
          <div className="flex justify-between mx-2 mt-8">
            <div className=" text-xl font-bold">
              <p>How Many files will you be </p>
              <p>uploading in the session</p>
            </div>
            <input required  onBlur={handleChange} name='file' className="w-28" type="text" />
          </div>
          {/* input 3  */}
          <div className="flex justify-between mx-2 mt-8">
            <div className="font-bold">
              <p>Number of Signers</p>

            </div>
            <input required  onBlur={handleChange} name='singer' className="w-28" type="text" />
          </div>
          {/* input 4  */}
          <div className="flex justify-between mx-2 mt-8">
            <div className="">
              <p className="font-bold">Do You need Witness?</p>
              <p>Do not enter anything if you're bring your own witness </p>
            </div>
            <input required   onBlur={handleChange} name='witness' className="w-28" type="text" />
          </div>
        </div>
        <p className="text-2xl font-bold text-end px-2 my-8">Your Approximate Quote: $ 59</p>

      </div>
    </div>
  );
}

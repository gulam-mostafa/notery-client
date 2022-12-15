// import { useStepperContext } from "../../contexts/StepperContext";
import { CgProfile } from 'react-icons/cg';
import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment({setAccount}) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {


    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setAccount({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col border border-black text-black">
    <div className="flex items-center gap-3 ml-4 border my-4 mx-2  border-b-black">
      <p><CgProfile /></p>
      <p>Signer Location</p>
    </div>
    <div className="form-control ml-2">
        <label className="label">
          <span className="label-text">Enter signing Location</span>
        </label>
        <label className="input-group input-group-vertical">
          <input required  onBlur={handleChange} name='location' type="text" placeholder="Type signing location" className="input input-bordered" />
        </label>
      </div>
    <div className="m-2 grid grid-cols-2 gap-4">
      {/* name  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <label className="input-group input-group-vertical">
          <input required  type="text" onBlur={handleChange} name='date' placeholder="Type Date" className="input input-bordered" />
        </label>
      </div>
      {/* phone */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Phone</span>
        </label>
        <label className="input-group input-group-vertical">
          <input required  type="text" onBlur={handleChange} name='telPhone' placeholder="Type Your phone" className="input input-bordered" />
        </label>
      </div>
      {/* name  */}
      
      
    </div>


    
  </div>
  );
}

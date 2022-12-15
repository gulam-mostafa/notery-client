import { useStepperContext } from "../../contexts/StepperContext";
import { CgProfile } from 'react-icons/cg';

export default function Details({ setAccount }) {
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
        <p>Signer Details</p>
      </div>
      <div className="m-2 grid grid-cols-2 gap-4">
        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required type="text" placeholder="Type Your name" onBlur={handleChange} name='name' className="input input-bordered" />
          </label>
        </div>
        {/* phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phone</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='phone' type="text" placeholder="Type Your phone" className="input input-bordered" />
          </label>
        </div>
        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='email' type="text" placeholder="Type Your email" className="input input-bordered" />
          </label>
        </div>
      </div>

      {/* company detail  */}
      <div className="flex items-center gap-3 ml-4 border my-4 mx-2  border-b-black">
        <p><CgProfile /></p>
        <p>Title Company details</p>
      </div>
      <div className="m-2 grid grid-cols-2 gap-4">
        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company name</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required type="text" onBlur={handleChange} name='company' placeholder="Type company name" className="input input-bordered" />
          </label>
        </div>
        {/* phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Agent Name</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='agent' type="text" placeholder="Type agent name" className="input input-bordered" />
          </label>
        </div>
        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='comEmail' type="text" placeholder="Type Your email" className="input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your phone</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='comPhone' type="text" placeholder="Type Your phone" className="input input-bordered" />
          </label>
        </div>
      </div>

      {/* order info  */}
      <div className="flex items-center gap-3 ml-4 border my-4 mx-2  border-b-black">
        <p><CgProfile /></p>
        <p>Order info</p>
      </div>
      <div className="m-2 grid grid-cols-2 gap-4">
        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Escrow#/ Loan No</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='loanNo' type="text" placeholder="Type Your name" className="input input-bordered" />
          </label>
        </div>
        {/* phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Address</span>
          </label>
          <label className="input-group input-group-vertical">
            <input required onBlur={handleChange} name='propertyAdd' type="text" placeholder="Type Property address" className="input input-bordered" />
          </label>
        </div>

      </div>



    </div>
  );
}

import { Link, NavLink } from "react-router-dom";

export default function Final({ postData }) {
  console.log(postData)
  console.log(postData)
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        {
          postData?.acknowledged ? <div className="mt-3 text-xl font-semibold uppercase text-green-500">
            Congratulations!
            <p> Your Account has been created.</p>
          </div> : <div className="mt-3 text-xl font-semibold uppercase text-red-500">
           Loading
            <p>
            <button className="btn btn-square loading"></button>
            </p>
          </div>

        }

        <a className="mt-10" href="/">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
        <Link
          to="/output"
         
          className="text-2xl hover:text-red-700"
        >
          Go Details
        </Link>
      </div>
    </div>
  );
}

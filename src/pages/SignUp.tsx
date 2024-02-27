import { Link } from "react-router-dom";
import RegistrationForm from "../component/RegistrationForm";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="m-auto">
        <div className="card w-96 bg-base-100 shadow-xl py-4">
          <h1 className="text-4xl font-bold text-primary text-center p-4 uppercase">
            Sign Up
          </h1>

          <RegistrationForm />

          <div className="flex justify-between px-4 items-center">
            <p>
              <small className="text-gray-400">Already have an account?</small>
            </p>
            <Link to="/login">
              <small className="text-green-400 hover:text-primary">
                Please login
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

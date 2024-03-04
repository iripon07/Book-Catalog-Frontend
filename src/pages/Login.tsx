import { Link } from "react-router-dom";
import LoginForm from "../component/LoginForm";

const Login = () => {
  return (
    <div className="flex">
      <div className="m-auto">
        <div className="card w-96 bg-base-100 shadow-xl py-4">
          <h1 className="text-4xl font-bold text-primary text-center p-4 uppercase">
            login
          </h1>
          <LoginForm />
          <div className="flex justify-between px-4 items-center">
            <p>
              <small className="text-gray-400">New to Book Shelf?</small>
            </p>
            <Link to="/signup">
              <small className="text-green-400 hover:text-primary">
                Create an account
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
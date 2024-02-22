import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
        const {
          register,
          handleSubmit,
          // reset,
          formState: { errors },
        } = useForm();

        const onSubmit = (data:ILoginFormValues) => {
            console.log(data, "user information!");
        }



  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl py-4">
        <h1 className="text-4xl font-bold text-primary text-center p-4 uppercase">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
         

          <div className="flex justify-center items-center mb-4">
            <label className="form-control w-full max-w-xs">
              <h6 className="text-xl text-gray-500">Email</h6>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              {errors?.email ? (
                <span className="text-red-900">
                  {errors?.email?.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </label>
          </div>

          <div className="flex justify-center items-center mb-4">
            <label className="form-control w-full max-w-xs">
              <h6 className="text-xl text-gray-500">Password</h6>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors?.password ? (
                <span className="text-red-900">
                  {errors?.password?.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </label>
          </div>

          <div className="card-actions flex justify-center items-center ">
            <button className="btn btn-primary text-white text-xl uppercase width-full">
              submit
            </button>
          </div>
        </form>
        <div className="flex justify-between px-4 items-center">
          <p>
            <small className="text-gray-400">New to Book Shelf?</small>
          </p>
          <Link to="/login">
            <small className="text-green-400 hover:text-primary">
              Create an account
            </small>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm
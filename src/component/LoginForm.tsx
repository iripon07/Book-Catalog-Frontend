import { useForm } from "react-hook-form";


interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm:React.FC = () => {
        const {
          register,
          handleSubmit,
          // reset,
          formState: { errors },
        } = useForm<ILoginFormValues>();

        const onSubmit = (data:ILoginFormValues) => {
            console.log(data, "user information!");
        }
  return (
    <>
     

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
              <div className="label">
                {errors.email ? (
                  <span className="text-red-900">
                    {errors?.email?.message?.toString()}
                  </span>
                ) : (
                  <></>
                )}
              </div>
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

        
    </>
  );
}

export default LoginForm
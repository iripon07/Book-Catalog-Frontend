import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../redux/features/user/userApi";
interface ISignUpFormValues {
  name: string;
  email: string;
  password: string;
  address: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [signup, { data, isError, isLoading, isSuccess }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignUpFormValues>();

  const onSubmit = (data: ISignUpFormValues) => {
    signup({
      name: data.name,
      email: data.email,
      password: data.password,
      address: data.address,
    });
  };
  useEffect(() => {
    if (!isLoading && !isError && isSuccess && data.statusCode === 200) {
      toast.success(`Sign up successfully`);
      reset();
      navigate(`/login`);
    } else if (!isLoading && isError) {
      toast.error(`Sign up failed`);
    }
  }, [data, isError, isSuccess, navigate, reset, isLoading]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Name</h6>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <div className="label">
              {errors.name ? (
                <span className="text-red-900">
                  {errors.name.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>

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

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Address</h6>
            <input
              type="text"
              placeholder="Enter your password"
              id="address"
              className="input input-bordered w-full max-w-xs"
              {...register("address", {
                required: "Address is required",
              })}
            />
            {errors?.address ? (
              <span className="text-red-900">
                {errors?.address?.message?.toString()}
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
};

export default RegistrationForm;

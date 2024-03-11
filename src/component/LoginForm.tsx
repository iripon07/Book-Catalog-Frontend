import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/user/userApi";
import { setToken } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hook";

interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user, "USer token");
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  const onSubmit: SubmitHandler<ILoginFormValues> = (
    data: ILoginFormValues
  ) => {
    login({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (!isLoading && !isError && isSuccess && data.statusCode === 200) {
      localStorage.setItem(`accessToken`, data?.data?.token);
      dispatch(setToken(data?.data?.token));
      toast.success(`User logged in successfully`);
      reset();
      navigate("/");
    }

    if (!isLoading && isError) {
      reset();
      toast.error(`User not logged in`);
    }
  }, [data, isError, isLoading, isSuccess, dispatch, navigate, reset]);

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
};

export default LoginForm;

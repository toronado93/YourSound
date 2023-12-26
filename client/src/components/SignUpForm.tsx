import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/joy/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
  passwordCheck: string;
};

function SignUpForm() {
  const [isPasswordLegit, setIsPasswordLegit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { password, passwordCheck } = data;

    if (password === passwordCheck) {
      setIsPasswordLegit(false);
      // Check two inputs
      console.log(data);
      // Perfum redux-thunk api call
      reset();
    } else {
      setIsPasswordLegit(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-7 sm:px-10">
      <div className="text-center mt-7">
        <h2 className="text-black text-xl font-medium">Create Account</h2>
        <p className="text-gray-400 text-xs font-thin mt-1">
          Join to community! Listen music...
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-7">
        <div className="border border-solid border-1 border-gray-100 p-2 w-max">
          <FontAwesomeIcon
            shake
            pull="left"
            className="text-blue-400 "
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Email is not valid",
              },
            })}
            className="bg-white text-xs font-thin w-56 p-1 text-black hover:ring-1 hover:ring-blue-300 focus:ring-1 focus:ring-blue-600"
            type="text"
            placeholder="Enter your email"
          ></input>
          <div className="mt-1">
            {errors.email && (
              <span className="text-red-400 text-xs">
                {errors.email?.message}
              </span>
            )}
          </div>
        </div>
        {/* Password */}
        <div className="border border-solid border-1 border-gray-100 p-2">
          <FontAwesomeIcon
            shake
            pull="left"
            className="text-blue-400 "
            icon={faLock}
          ></FontAwesomeIcon>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
              pattern: {
                value: /^(?=(.*[A-Z]))(?=.*[@$!%*?&]).+$$/i,
                message:
                  "At least one uppercase letter and one lowercase letter also one special character ",
              },
            })}
            className="bg-white text-xs font-thin w-56 p-1 text-black hover:ring-1 hover:ring-blue-300 focus:ring-1 focus:ring-blue-600"
            type="password"
            placeholder="Enter your password"
          ></input>
          <div className="mt-1 ">
            {errors.password && (
              <span className="text-red-400 text-xs flex text-center w-60">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <div className="border border-solid border-1 border-gray-100 p-2">
          <FontAwesomeIcon
            shake
            pull="left"
            className="text-blue-400 "
            icon={faLock}
          ></FontAwesomeIcon>
          <input
            {...register("passwordCheck", {
              required: "Password is required",
            })}
            className="bg-white text-xs font-thin w-56 p-1 text-black hover:ring-1 hover:ring-blue-300 focus:ring-1 focus:ring-blue-600"
            type="password"
            placeholder="Confirm your password"
          ></input>
          <div className="mt-1 ">
            {isPasswordLegit && (
              <span className="text-red-400 text-xs ">
                Passwords are not the same.
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex my-6 ">
        <Button type="submit" loading={false} className="flex gap-1 flex-1">
          <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>Sign Up
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;

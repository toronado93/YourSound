import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/joy/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

type Inputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-md mt-4 shrink mb-5 px-10"
    >
      <div className="text-center mt-7">
        <h2 className="text-gray-500 text-xl font-medium">Welcome Back</h2>
        <p className="text-gray-400 text-xs font-thin mt-1">
          Enter your credentials to access your account
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
        <div className="border border-solid border-1 border-gray-100 p-2">
          <FontAwesomeIcon
            shake
            pull="left"
            className="text-blue-400 "
            icon={faLock}
          ></FontAwesomeIcon>
          <input
            {...register("password", { required: true })}
            className="bg-white text-xs font-thin w-56 p-1 text-black hover:ring-1 hover:ring-blue-300 focus:ring-1 focus:ring-blue-600"
            type="password"
            placeholder="Enter your password"
          ></input>
          <div className="mt-1 ">
            {errors.password && (
              <span className="text-red-400 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex my-6 ">
        <Button type="submit" loading={false} className="flex gap-1 flex-1">
          <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>Sign In
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;

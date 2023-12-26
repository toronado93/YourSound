import Logo from "../assets/img/logo.svg";
import SignUpForm from "./SignUpForm";
import SignUpImg from "../assets/img/signup.svg";
function SignUp() {
  return (
    <div className="bg-slate-300 pt-2 h-screen">
      <div className="w-max m-auto  flex flex-col justify-center">
        <div className=" ring-1 ring-white rounded-full p-5 w-max m-auto ">
          <img className="w-24 h-24 rounded-2xl" src={Logo}></img>
        </div>
        <div className="flex flex-col sm:flex-row mt-1  ">
          <SignUpForm></SignUpForm>
          <div className="self-center">
            <img className="w-full h-80 sm:h-96" src={SignUpImg}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

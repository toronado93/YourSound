import Logo from "../assets/img/logo.svg";
import LoginForm from "./LoginForm";
import EmailReseter from "./EmailReseter";

function Login() {
  return (
    <div className="w-max m-auto  flex flex-col justify-center">
      <div className=" ring-1 ring-white rounded-full p-5 w-max m-auto ">
        <img className="w-24 h-24 rounded-2xl" src={Logo}></img>
      </div>
      <LoginForm></LoginForm>
      <EmailReseter></EmailReseter>
    </div>
  );
}

export default Login;

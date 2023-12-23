import { useNavigate } from "react-router-dom";

function EmailReseter() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-1 text-xs justify-center ">
      <p className="text-gray-600">Forgot your password?</p>
      <span
        onClick={() => {
          navigate("/resetemail");
        }}
        className="text-blue-500 cursor-pointer"
      >
        Reset Password
      </span>
    </div>
  );
}

export default EmailReseter;

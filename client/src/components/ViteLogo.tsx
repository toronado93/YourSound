import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function ViteLogo() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img
          src={viteLogo}
          className="logo ring-1 rounded-full ring-white p-3"
          alt="Vite logo"
        />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className="logo ring-1 rounded-full ring-white p-3"
          alt="React logo"
        />
      </a>
    </div>
  );
}

export default ViteLogo;

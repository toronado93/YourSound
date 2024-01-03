import { useNavigate } from "react-router-dom";

import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function WelcomePage() {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(true);

  // useeffect controls snackbar state

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSnackBarOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const navigate = useNavigate();

  //   When component mounted , there will be a state initial value true
  //  after timeout become a false , this state manage snackbar comp.

  return (
    <>
      <div className="bg-slate-300 pt-2 h-screen flex justify-center">
        <div className="bg-white text-black rounded-xl h-max mt-20 p-3">
          <div className="text-center">
            <h2 className="text-2xl">Welcome to Your Sound!</h2>
            <p className="text-sm text-gray-500">
              You are only one step away to listen exculisive Music!
            </p>
            <Button
              sx={{
                marginTop: 2,
                display: "flex",
                gap: 1,
                marginInline: "auto",
              }}
              onClick={() => {
                navigate("/");
              }}
              size="md"
              variant="solid"
            >
              <span>Understand</span>
              <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>

      <Snackbar
        autoHideDuration={3000}
        color="primary"
        size="md"
        variant="solid"
        open={isSnackBarOpen}
        onClose={() => {
          console.log("close");
        }}
      >
        <span>Your account is created</span>
        <FontAwesomeIcon icon={faChampagneGlasses} />
      </Snackbar>
    </>
  );
}

export default WelcomePage;

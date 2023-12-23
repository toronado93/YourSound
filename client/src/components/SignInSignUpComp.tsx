import Button from "@mui/joy/Button";
import { VariantProp } from "@mui/joy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

interface SignInSignUpCompProps {
  style?: string;
  variant?: VariantProp;
  onClick: () => void;
  variant2?: VariantProp;
  onClick2: () => void;
}

function SignInSignUpComp({
  style,
  variant,
  onClick,
  variant2,
  onClick2,
}: SignInSignUpCompProps) {
  return (
    <div className={`${style} flex gap-1`}>
      <Button
        onClick={onClick}
        sx={{ color: "white", display: "flex", gap: 1 }}
        variant={variant}
      >
        <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        <span>Log In</span>
      </Button>
      <Button
        sx={{ display: "flex", gap: 1 }}
        onClick={onClick2}
        variant={variant2}
        color="primary"
      >
        <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
        <span>Sign Up</span>
      </Button>
    </div>
  );
}

export default SignInSignUpComp;

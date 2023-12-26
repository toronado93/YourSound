import {
  ComponentFeatureFlags,
  useFeatureFlag,
  FEATURE_TYPE_COMP,
} from "../middleware/FeatureFlag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// COMPONENT FLAGNAME
const featureName: keyof ComponentFeatureFlags = "LOGOUTNAVBAR_COMPONENT";

function LogOutNavbar() {
  const isFeatureEnabled = useFeatureFlag(featureName, FEATURE_TYPE_COMP);

  return isFeatureEnabled ? (
    <button className="hover:border hover:border-solid hover:border-white hover:rounded-xl p-2 ">
      <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log Out
    </button>
  ) : null;
}

export default LogOutNavbar;

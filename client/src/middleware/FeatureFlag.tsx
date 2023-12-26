// We gonna use seperate feature flag for api and components

// Separate Feature Flags
export type ApiFeatureFlags = {
  [key: string]: boolean;
};

export type ComponentFeatureFlags = {
  [key: string]: boolean;
};

export type FeatureFlag = ApiFeatureFlags & ComponentFeatureFlags;

// Api flag
const apiFlags: ApiFeatureFlags = {
  NEW_API_ENDPOINT: true,
  ANALYTICS_API_ENABLED: false,
};

// Component flag
const componentFlags: ComponentFeatureFlags = {
  LOGOUTNAVBAR_COMPONENT: true,
};

// Make a custom hook for consumer component that return true if the flag is true so it can be used if the future is false can not be used

// Feature type can be comp(component) or api
type FeatureType = "comp" | "api";

type ReturnType = boolean;

export const useFeatureFlag = (
  featureName: keyof (ApiFeatureFlags & ComponentFeatureFlags),
  featureType: FeatureType
): ReturnType => {
  let response = false;
  // check the argument if it is in the object
  if (featureType === "api") {
    // is flag argument inside of the api object
    if (apiFlags[featureName]) {
      response = true;
    }
  } else if (featureType === "comp") {
    if (componentFlags[featureName]) {
      response = true;
    }
  }

  return response;
};

export const FEATURE_TYPE_API: FeatureType = "api";
export const FEATURE_TYPE_COMP: FeatureType = "comp";

import React from "react";
import ReactDOM from "react-dom";
import { useGoogleLogout } from "react-google-login";

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    alert("Logged out Successfuly");
  };
  const onFailure = () => {
    console.log("Handle faliure cases");
  };
  const { signOut, loaded } = useGoogleLogout({
    jsSrc,
    onFailure,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    fetchBasicProfile,
    discoveryDocs,
    uxMode,
    redirectUri,
    scope,
    accessType,
    onLogoutSuccess,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;

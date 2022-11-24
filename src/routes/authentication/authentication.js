import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

const Authentication = () => {
  return (
    <div>
      <h1>Sing In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

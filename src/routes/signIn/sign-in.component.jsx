import { signInWithGooglePopup, createuserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = ()=>{
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createuserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
             Sign in With Google Popup
            </button>
        </div>
    );
};

export default SignIn;
import { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt="logo"
        />
        <button
          className="loginScreen_button"
          onClick={() => {
            setSignIn(true)
          }}
        >
          Sign In
        </button>
      </div>
      <div className="loginScreen_gradient"></div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1 className="heading-text">
              Unlimited films, Tv programmes and more.
            </h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to crete or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => {
                    setSignIn(true)
                  }}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default LoginScreen
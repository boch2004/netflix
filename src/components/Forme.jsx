import React, { useState } from 'react';

function Forme() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [hover, setHover] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const validateField = (field) => {
    const newErrors = { ...errors };

    if (field === 'email') {
      if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Please enter a valid email.';
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'password') {
      if (password.length < 4 || password.length > 60) {
        newErrors.password = 'Your password must contain between 4 and 60 characters.';
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField('email');
    validateField('password');

    if (Object.keys(errors).length === 0) {
      console.log('Submit', { email, password });
    }
  };

  const isEmailActive = emailFocused || email !== '';
  const isPasswordActive = passwordFocused || password !== '';

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 757 }}>
      <div style={{ width: 450, height: 709, background: "rgba(0, 0, 0, 0.7)", marginBottom: 48, borderRadius: 5, display:"flex",flexDirection:"column",alignItems:"center" }}>
        <div style={{width:322}}>
        <h1 style={{ color: "white", fontSize: 32, fontWeight: 500, marginTop: 24 }}>Sign In</h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
          {/* Email */}
          <div style={{ position: "relative", marginBottom: errors.email ? 4 : 16 }}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => {
                setEmailFocused(false);
                validateField('email');
              }}
              style={{
                height: 24,
                borderRadius: 4,
                border: errors.email ? '1px solid #eb3942' : 'none',
                color: "white",
                fontSize: 16,
                width: 290,
                padding: "24px 16px 8px 16px  ",
              }}
            />
            <label style={{
              position: "absolute",
              left: 16,
              top: isEmailActive ? 6 : 16,
              fontSize: isEmailActive ? 12 : 16,
              color: "#8c8c8c",
              transition: "all 0.2s ease",
              pointerEvents: "none"
            }}>
              Email or mobile number
            </label>
          </div>
          {errors.email && (
            <div style={{ display: "flex", alignItems: "center", color: "#c63937", fontSize: 14, marginTop: 4, marginBottom: 8 }}>
              <span style={{ marginRight: 4 }}><svg style={{paddingTop:"5px"}} xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-163bhew-StyledCircleXSmall-StyledValidationIcon e1vkmu653">
<path fill="currentColor" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" clip-rule="evenodd" fill-rule="evenodd"></path>

</svg></span>{errors.email}
            </div>
          )}

          {/* Password */}
          <div style={{ position: "relative", marginBottom: errors.password ? 4 : 16 }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => {
                setPasswordFocused(false);
                validateField('password');
              }}
              style={{
                height: 24,
                borderRadius: 4,
                border: errors.password ? '1px solid #eb3942' : 'none',
                color: "white",
                fontSize: 16,
                width: 290,
                padding: "24px 16px 8px 16px  ",
              }}
            />
            <label style={{
              position: "absolute",
              left: 16,
              top: isPasswordActive ? 6 : 16,
              fontSize: isPasswordActive ? 12 : 16,
              color: "#8c8c8c",
              transition: "all 0.2s ease",
              pointerEvents: "none"
            }}>
              Password
            </label>
          </div>
          {errors.password && (
            <div style={{ color: "#c63937", fontSize: 14, marginBottom: 16 }}>
              <svg   xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-163bhew-StyledCircleXSmall-StyledValidationIcon e1vkmu653">
<path fill="currentColor" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" clip-rule="evenodd" fill-rule="evenodd"></path>

</svg> {errors.password}
            </div>
          )}

          <button type="submit" style={{
            background: "#e50914", color: "white", height: 40,width: 322,
            borderRadius: 4, border: "none", marginBottom: 16
          }}>
            Sign In
          </button>
        </form>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <span style={{ color: "#737373" }}>OR</span><br />
        <button style={{ background: "#9d9d9d", color: "white", height: 40,width:322, borderRadius: 4, border: "none" }}>
          Use a Sign-In Code
        </button>
        <br/>
        <a
  href="#"
  style={{
    display: "inline-block",
    color: "white",
    textDecoration: "underline",
    cursor: "pointer"
  }}
  onMouseOver={(e) => e.target.style.color = "#b3b3b3"}
  onMouseOut={(e) => e.target.style.color = "white"}
>
  Forgot password?
</a>
</div>
<div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
  <input
    type="checkbox"
    id="remember"
    style={{
      width: 18,
      height: 18,
      accentColor: '#ffff', // يخلي لون الصحّ أحمر كيما Netflix
      marginRight: 8,
      cursor: 'pointer',
    }}
  />
  <label htmlFor="remember" style={{ color: 'white', fontSize: 14 }}>
    Remember me
  </label>
</div>
<br/>
<span>
      New to Netflix?
      <a
        style={{
          display: "inline-block",
          color: "white",
          textDecoration: hover ? "underline" : "none",
          cursor: "pointer",
          marginLeft: 5
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Sign up now.
      </a>
      <br />
    </span>
    <span style={{
          margin: 0,
          padding: 0,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8125rem",
          fontWeight: 400,
          textAlign: "start",
          userSelect: "text",
        }}>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
        <br/>
    {!showInfo && (
        <p
          onClick={() => setShowInfo(true)}
          style={{
            display: "inline-block",
            color: "blue",
            fontSize: "0.8125rem",
            textDecoration: "underline",
            cursor: "pointer",
            marginBottom: 8
          }}
        >
          Learn more.
        </p>
      )}

      {showInfo && (
        <p style={{
          margin: 0,
          padding: 0,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8125rem",
          fontWeight: 400,
          textAlign: "start",
          userSelect: "text"
        }}>
          The information collected by Google reCAPTCHA is subject to the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service,</a>
          and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes
          (it is not used for personalized advertising by Google).
        </p>
      )}
      </div>
      </div>
    </div>
  );
}

export default Forme;

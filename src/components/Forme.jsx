import React, { useState } from 'react'

function Forme() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (password.length < 4 || password.length > 60) {
      newErrors.password = 'Your password must contain between 4 and 60 characters.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Submit', { email, password });
    }
  };

  const isEmailActive = emailFocused || email !== '';
  const isPasswordActive = passwordFocused || password !== '';

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 757 }}>
      <div style={{ width: 450, height: 709, background: "rgba(0, 0, 0, 0.7)", marginBottom: 48, borderRadius: 5, padding: "0 32px" }}>
        <h1 style={{ color: "white", fontSize: 32, fontWeight: 500, marginTop: 24 }}>Sign In</h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
          {/* Email */}
          <div style={{ position: "relative", marginBottom: errors.email ? 4 : 16 }}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                height: 50,
                borderRadius: 4,
                border: errors.email ? '1px solid #e87c03' : 'none',
                backgroundColor: "#333",
                color: "white",
                paddingLeft: 16,
                paddingTop: 20,
                fontSize: 16,
                width: "100%"
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
            <div style={{ display: "flex", alignItems: "center", color: "#e87c03", fontSize: 14, marginTop: 4, marginBottom: 8 }}>
              <span style={{ marginRight: 8 }}>❌</span>{errors.email}
            </div>
          )}

          {/* Password */}
          <div style={{ position: "relative", marginBottom: errors.password ? 4 : 16 }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              style={{
                height: 50,
                borderRadius: 4,
                border: errors.password ? '1px solid #e87c03' : 'none',
                backgroundColor: "#333",
                color: "white",
                paddingLeft: 16,
                paddingTop: 20,
                fontSize: 16,
                width: "100%"
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
  <div style={{ color: "#e87c03", fontSize: 14, marginBottom: 16 }}>
    ❌ {errors.password}
  </div>
)}


          <button type="submit" style={{
            background: "#e50914", color: "white", height: 50,
            borderRadius: 4, border: "none", marginBottom: 16
          }}>
            Sign In
          </button>
        </form>

        <span>OR</span><br />
        <button style={{ background: "#9d9d9d", color: "white", height: 50, borderRadius: 4, border: "none", marginTop: 16 }}>
          Use a Sign-In Code
        </button>
      </div>
    </div>
  )
}

export default Forme;

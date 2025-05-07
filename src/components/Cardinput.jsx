import React, { useState } from "react";

function CardInput() {
  const [open, setOpen] = useState(false);
  const languages = ["العربية", "Français", "English"];
  const [selected, setSelected] = useState("English");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [errors, setErrors] = useState({});
  const [cardNumberFocused, setCardNumberFocused] = useState(false);
  const [expirationDateFocused, setExpirationDateFocused] = useState(false);
  const [cvvFocused, setCVVFocused] = useState(false);
  const [nameOnCardFocused, setNameOnCardFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const validateField = (field, value) => {
    const newErrors = { ...errors };

    switch (field) {
      case "cardNumber":
        if (!/^\d{15,16}$/.test(value)) {
          newErrors.cardNumber = "Please enter a valid card number.";
        } else {
          delete newErrors.cardNumber;
        }
        break;
      case "expirationDate":
        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value)) {
          newErrors.expirationDate = "Please enter a valid expiration date .";
        } else {
          delete newErrors.expirationDate;
        }
        break;
      case "cvv":
        if (!/^\d{3,4}$/.test(value)) {
          newErrors.cvv = "Please enter a valid CVV.";
        } else {
          delete newErrors.cvv;
        }
        break;
      case "nameOnCard":
        if (!value.trim()) {
          newErrors.nameOnCard = "Name is required.";
        } else {
          delete newErrors.nameOnCard;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField("cardNumber", cardNumber);
    validateField("expirationDate", expirationDate);
    validateField("cvv", cvv);
    validateField("nameOnCard", nameOnCard);

    if (Object.keys(errors).length === 0) {
      console.log("Submit", { cardNumber, expirationDate, cvv, nameOnCard });
    }
  };

  const ErrorMessage = ({ message }) => (
    <div
      style={{
        color: "#c63937",
        fontSize: 14,
        marginBottom: 16,
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        role="img"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        data-icon="CircleXSmall"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
      <span style={{ marginLeft: 4, fontSize: "0.8125rem" }}>{message}</span>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div style={{ maxWidth: 440, paddingTop: 50 }}>
        {/* Header and card logos remain same */}
        <span
          style={{
            fontSize: "13px",
            textAlign: "left",
            lineHeight: "19px",
            display: "block",
            color: "#333",
          }}
        >
          STEP 3 OF 3
        </span>
        <h1 style={{ color: "black",margin:0 }}>Set up your credit or debit card</h1>

        <span
          data-uia="cardLogos-comp"
          aria-label="We accept Visa, Mastercard and American Express."
        >
          <img
            style={{ marginRight: 6 }}
            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
            alt="Visa"
            className="logoIcon VISA default-ltr-cache-kg1rox e18ygst00"
            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x"
            data-uia="logoIcon-VISA"
          />
          <img
            style={{ marginRight: 6 }}
            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
            alt="Mastercard"
            className="logoIcon MASTERCARD default-ltr-cache-kg1rox e18ygst00"
            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x"
            data-uia="logoIcon-MASTERCARD"
          />
          <img
            style={{ marginRight: 6 }}
            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
            alt="American Express"
            className="logoIcon AMEX default-ltr-cache-kg1rox e18ygst00"
            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png 2x"
            data-uia="logoIcon-AMEX"
          />
        </span>
        {/* Card Number Input */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ position: "relative" }}>
            <input
              className="cardnumber"
              type="tel"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              onFocus={() => setCardNumberFocused(true)}
              onBlur={() => {
                setCardNumberFocused(false);
                validateField("cardNumber", cardNumber);
              }}
              style={inputStyle(errors.cardNumber)}
              maxLength={16}
            />
            <FloatingLabel
              text="Card number"
              focused={cardNumberFocused}
              value={cardNumber}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
              }}
            >
              <path
                fill="currentColor"
                d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V8H22V6C22 5.44771 21.5523 5 21 5H3ZM2 18V10H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18ZM16 16H20V14H16V16Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
          {errors.cardNumber && <ErrorMessage message={errors.cardNumber} />}
        </div>

        {/* Expiration Date and CVV Container */}
        <div style={{ display: "flex", marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ position: "relative" }}>
              <input
                className="date"
                type="tel"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                onFocus={() => setExpirationDateFocused(true)}
                onBlur={() => {
                  setExpirationDateFocused(false);
                  validateField("expirationDate", expirationDate);
                }}
                style={inputStyle(errors.expirationDate)}
                placeholder="MM/YY"
                maxLength={5}
              />
              <FloatingLabel
                text="Expiration date"
                focused={expirationDateFocused}
                value={expirationDate}
              />
            </div>
            {errors.expirationDate && (
              <ErrorMessage message={errors.expirationDate} />
            )}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ position: "relative" }}>
              <input
                className="CVV"
                type="tel"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                onFocus={() => setCVVFocused(true)}
                onBlur={() => {
                  setCVVFocused(false);
                  validateField("cvv", cvv);
                }}
                style={inputStyle(errors.cvv)}
                maxLength={4}
              />
              <FloatingLabel text="CVV" focused={cvvFocused} value={cvv} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#666",
                  cursor: "help",
                }}
              >
                <path
                  fill="currentColor"
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 8C10.6831 8 10 8.74303 10 9.5H8C8 7.25697 10.0032 6 12 6C13.9968 6 16 7.25697 16 9.5C16 10.8487 14.9191 11.7679 13.8217 12.18C13.5572 12.2793 13.3322 12.4295 13.1858 12.5913C13.0452 12.7467 13 12.883 13 13V14H11V13C11 11.5649 12.1677 10.6647 13.1186 10.3076C13.8476 10.0339 14 9.64823 14 9.5C14 8.74303 13.3169 8 12 8ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            {errors.cvv && <ErrorMessage message={errors.cvv} />}
          </div>
        </div>

        {/* Name on Card Input */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ position: "relative" }}>
            <input
              className="cardnumber"
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              onFocus={() => setNameOnCardFocused(true)}
              onBlur={() => {
                setNameOnCardFocused(false);
                validateField("nameOnCard", nameOnCard);
              }}
              style={inputStyle(errors.nameOnCard)}
            />
            <FloatingLabel
              text="Name on card"
              focused={nameOnCardFocused}
              value={nameOnCard}
            />
          </div>
          {errors.nameOnCard && <ErrorMessage message={errors.nameOnCard} />}
        </div>

        {/* Price Summary */}
        <div style={summaryStyle}>
          <div>
            <h5 style={{ color: "black", margin: 0 }}>USD 9.99/month</h5>
            <span style={{ color: "#8c8c8c" }}>Premium</span>
          </div>
          <a href="#" style={{ color: "#0071eb", textDecoration: "none" }}>
            Change
          </a>
        </div>
        <span style={{ color: "rgba(0,0,0,0.6)", fontSize: 12, marginTop: 4 }}>
          By checking the checkbox below, you agree to our{" "}
          <a href="https://help.netflix.com/legal/privacy">
            Terms of Use, Privacy Statement
          </a>
          , and that you are over 18. Netflix will automatically continue your
          membership and charge the membership fee (currently USD 9.99/month) to
          your payment method until you cancel. You may cancel at any time to
          avoid future charges.
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{
              marginLeft: 4,
              backgroundColor: "white",
              borderRadius: 4,
              width: 16,
              height: 16,
            }}
          />
          <span
            style={{
              color: "rgba(0,0,0,0.6)",
              fontSize: "0.8125rem",
              fontWeight: 400,
              marginLeft: 4,
            }}
          >
            I agree
          </span>
        </div>
        <button
          type="submit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: "#e50914",
            color: "white",
            height: 56,
            width: 440,
            borderRadius: 4,
            border: "none",
            marginBottom: 16,
            outline: "none",
            filter: isHovered ? "brightness(85%)" : "brightness(100%)",
            transition: "filter 0.2s",
          }}
        >
          <h2 style={{ margin: -16 }}>Start Membership</h2>
        </button>
        <p
          style={{
            marginBlockStart: 0,
            marginBlockEnd: 0,
            margin: 0,
            padding: 0,
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.8125rem",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a
            href="https://www.google.com/recaptcha/about/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Learn more.
          </a>
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          height: 213,
          backgroundColor: "#e6e6e6",
          marginTop: 220,
          paddingLeft: 92,
          paddingRight: 92,
          paddingTop: 30,
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <a
            style={{ color: "#737373" }}
            href="https://help.netflix.com/en/contactus"
          >
            Questions? Contact us.
          </a>
        </div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {[
            { label: "FAQ", href: "https://help.netflix.com/support/412" },
            { label: "Help Center", href: "https://help.netflix.com" },
            {
              label: "Terms of Use",
              href: "https://help.netflix.com/legal/termsofuse",
            },
            {
              label: "Privacy",
              href: "https://help.netflix.com/legal/privacy",
            },
            { label: "Cookie Preferences", href: "#" },
            {
              label: "Corporate Information",
              href: "https://help.netflix.com/legal/corpinfo",
            },
          ].map((item, index) => (
            <li key={index} style={{ width: 350, margin: "16px 0 5px 0px" }}>
              <a href={item.href} style={{ color: "#737373", fontSize: 12 }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            fontFamily: "Arial",
          }}
        >
          <button
            onClick={() => setOpen(!open)}
            style={{
              marginTop: 16,
              width: 132,
              height: 32,
              color: "#fff",
              padding: " 12px 0px 12px 8px",
              borderRadius: "4px",
              border: "1px solid #666",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: "1rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                data-icon="LanguagesSmall"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>{" "}
            {selected}&nbsp;&nbsp;&nbsp; ▾
          </button>
          {open && (
            <ul className="dropdown-list">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className={`dropdown-item ${selected === "selected"}`}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper components and styles
const inputStyle = (hasError) => ({
  height: 24,
  padding: "24px 16px 8px 16px",
  border: hasError ? "1px solid #eb3942" : "1px solid #63666a",
  borderRadius: 4,
  fontSize: 16,
  backgroundColor: "white",
  color: "black",
});

const FloatingLabel = ({ text, focused, value }) => (
  <label
    style={{
      position: "absolute",
      left: 16,
      top: focused || value ? 6 : 16,
      fontSize: focused || value ? 12 : 16,
      color: "#8c8c8c",
      transition: "all 0.2s ease",
      pointerEvents: "none",
    }}
  >
    {text}
  </label>
);

const summaryStyle = {
  width: "408px",
  height: 72,
  backgroundColor: "#f4f4f4",
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
};

export default CardInput;

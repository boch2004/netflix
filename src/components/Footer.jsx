import React, { useState } from "react";



function Footer() {
  const [selected, setSelected] = useState("English");
const [open, setOpen] = useState(false);

const languages = ["العربية", "Français", "English"];
  return (
    <div style={{ background: "#161616", height: 164, padding: "72px 20px 72px 202px", color: "white" }}>
      <div style={{ marginBottom: "1rem" }}>Questions? Contact us.</div>
      <ul style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        listStyle: "none",
        padding: 0,
        margin: 0,      }}>
        {[
          { label: "FAQ", href: "https://help.netflix.com/support/412" },
          { label: "Help Center", href: "https://help.netflix.com" },
          { label: "Terms of Use", href: "https://help.netflix.com/legal/termsofuse" },
          { label: "Privacy", href: "https://help.netflix.com/legal/privacy" },
          { label: "Cookie Preferences", href: "#" },
          { label: "Corporate Information", href: "https://help.netflix.com/legal/corpinfo" }
        ].map((item, index) => (
          <li key={index} style={{width:350,margin:"16px 0 5px 0px",textDecoration: "underline",
          }}>
            <a href={item.href} style={{ color: "#999", fontSize: 14 }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div style={{ position: "relative", display: "inline-block", fontFamily: "Arial" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          marginTop: 16,  
          width: 132,
          height: 32,
          color: "#fff",
          padding: " 12px 0px 12px 8px" ,
          borderRadius: "4px",
          border: "1px solid #666",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8
        }}
      >
        <span style={{ fontSize: "1rem" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true">
<path fill="currentColor" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" clip-rule="evenodd" fill-rule="evenodd"></path>

</svg></span> {selected}&nbsp;&nbsp;&nbsp; ▾
      </button>
      {open && (
       <ul className="dropdown-list">
       {languages.map((lang) => (
         <li
           key={lang}
           className={`dropdown-item ${
             selected === "selected"
           }`}
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
  );
}

export default Footer;

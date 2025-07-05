import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#03045E] text-[#FBF8CC] p-4 mt-23 ">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Made with love &lt;3 by Raihan Fajar Ramadhan
        </p>
      </aside>
    </footer>
  );
}

export default Footer;

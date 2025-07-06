import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center mt-23 bg-[#03045E] p-4 text-[#FBF8CC]">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Made with love &lt;3 by
          Raihan Fajar Ramadhan
        </p>
      </aside>
    </footer>
  );
}

export default Footer;

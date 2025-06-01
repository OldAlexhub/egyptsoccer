import React from "react";

function Footer() {
  return (
    <footer
      className="text-center py-4 mt-5 border-top text-muted"
      style={{ fontSize: "0.85rem" }}
    >
      <p>
        &copy; {new Date().getFullYear()} Egyptian League AI Project. Built by{" "}
        <strong>Mohamed Gad</strong> for research and educational purposes.
      </p>
      <p>
        Not intended for gambling, betting, or commercial use. Use responsibly.
      </p>
    </footer>
  );
}

export default Footer;

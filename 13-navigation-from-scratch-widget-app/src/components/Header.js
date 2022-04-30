import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="active item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/search">
        Wiki Search
      </Link>
      <Link className="item" href="/dropdown">
        Dropdown
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link>
    </div>
  );
};

export default Header;

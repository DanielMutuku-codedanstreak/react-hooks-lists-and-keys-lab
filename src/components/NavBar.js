import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navlink = links.map(link => {
    return <a key={link} href={'#'+link}>{link}</a>
  })

  return <nav>
    {navlink}
  </nav>;
}

export default NavBar;

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const newLinks = links.map(function(ele){
    return <a key={ele} href={`#${ele}`}>{ele}</a>
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;

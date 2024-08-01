import React from "react";

function NavItem(props) {
  return (
    <a href={props.link} className="font-semibold">
      {props.text}
    </a>
  );
}

export default NavItem;

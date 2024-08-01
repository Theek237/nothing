import React from "react";

function Button(props) {
  return (
    <a
      href={props.link}
      className="text-main-black bg-main-orange px-5 py-2 rounded font-semibold m-0 text-lg cursor-pointer text-center"
    >
      {props.text}
    </a>
  );
}

function ButtonBig(props) {
  return (
    <a
      href={props.link}
      className="text-main-black bg-main-orange px-9 py-2.5 rounded font-bold m-0 text-xl cursor-pointer text-center"
    >
      {props.text}
    </a>
  );
}

function ButtonBigWhite(props) {
  return (
    <a
      href={props.link}
      className="text-white bg-main-orange px-9 py-2.5 rounded font-bold m-0 text-xl cursor-pointer text-center"
    >
      {props.text}
    </a>
  );
}

//export default Button;
export { Button, ButtonBig, ButtonBigWhite };

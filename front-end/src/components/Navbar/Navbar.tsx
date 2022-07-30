import React from "react";
import { Button } from "react-bootstrap";

type PrivateProps = {
  switchTheme: () => void;
};

const Navbar = (props: PrivateProps) => {
  return (
    <div>
      <Button onClick={props.switchTheme}>Switch Theme!</Button>
    </div>
  );
};

export default Navbar;

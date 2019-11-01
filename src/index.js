import React from "react";
import ReactDOM from "react-dom";

import { ButtonTypes, ButtonSizes } from "./buttonTypes";

import Button from "./Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
        <Button
          size={ButtonSizes.MEDIUM}
          label="Button"
          onClickHandler={() => alert("you clicked!")}
          type={ButtonTypes.PRIMARY}
        />
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

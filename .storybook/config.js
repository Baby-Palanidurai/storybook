import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import purpleDream from "./purpleDream";
import { withKnobs, text } from '@storybook/addon-knobs';

//addDecorator(withKnobs)

function loadStories() {
  require("../src/stories");
}

addParameters({
  options: {
    theme: purpleDream
  }
});

configure(loadStories, module);

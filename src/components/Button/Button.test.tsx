import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders correctly", () => {
    const { container } = render(<Button label="Click me" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="storybook-button storybook-button--medium storybook-button--secondary"
          type="button"
        >
          Click me
        </button>
      </div>
    `);
  });
});

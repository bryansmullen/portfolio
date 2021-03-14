import Panel from "./Panel";
import { mount } from "@cypress/react";

describe("Index", () => {
  it("should mount", () => {
    mount(<Panel />);
    cy.get(".panel").should("exist");
  });
});

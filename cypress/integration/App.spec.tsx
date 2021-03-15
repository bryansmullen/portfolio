export {};
describe("App Tests", () => {
  it("should render to the DOM", () => {
    cy.visit("/");
    cy.get(".project").should("exist");
  });
});

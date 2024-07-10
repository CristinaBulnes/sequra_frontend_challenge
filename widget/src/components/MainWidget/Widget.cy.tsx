import Widget from "./Widget";

describe("<Widget />", () => {
  it("should display more info button", () => {
    cy.mount(<Widget />);

    cy.findByText("Welcome!").should("be.visible");
  });
});

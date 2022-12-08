import * as applyActions from "cypress/helpers/pages/applyActions";

describe("Request access page - positive - SAMPLE TEST", () => {
  it("should allow user to successfully request the access", () => {
    cy.visit("/");
    applyActions.enterFullName("John Doe");
    applyActions.enterRandomEmail();
    applyActions.selectBusinessType("Newbie");
    applyActions.selectLifeStyleNiche();
    applyActions.clickRequestAccessButton();
    cy.get("h1").should(
      "have.text",
      "Thank you for applying to Authority Builders!"
    );
    cy.get("h2").should("have.text", "FAQ");
  });
});

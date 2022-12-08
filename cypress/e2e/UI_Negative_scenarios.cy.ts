import * as applyActions from "cypress/helpers/pages/applyActions";

describe("Request access page - negative - SAMPLE TEST", () => {
  it("should display an error message for missing name", () => {
    cy.visit("/");
    applyActions.enterRandomEmail();
    applyActions.selectBusinessType("Newbie");
    applyActions.selectLifeStyleNiche();
    applyActions.clickRequestAccessButton();
    cy.get("#fullname-error")
      .should("exist")
      .and("have.text", "This field is required.");
  });

  it("should display an error message for missing email", () => {
    cy.visit("/");
    applyActions.enterFullName("John Doe");
    applyActions.selectBusinessType("Newbie");
    applyActions.selectLifeStyleNiche();
    applyActions.clickRequestAccessButton();
    cy.get("#email-error")
      .should("exist")
      .and("have.text", "This field is required.");
  });

  it("should display an error message for not selected business type", () => {
    cy.visit("/");
    applyActions.enterFullName("John Doe");
    applyActions.enterRandomEmail();
    applyActions.selectLifeStyleNiche();
    applyActions.clickRequestAccessButton();
    cy.get("span").should("contain.text", "Please select Business Type");
  });

  it("should display an error message for not selected niche", () => {
    cy.visit("/");
    applyActions.enterFullName("John Doe");
    applyActions.enterRandomEmail();
    applyActions.selectBusinessType("Newbie");
    applyActions.clickRequestAccessButton();
    cy.get("span").should("contain.text", "Please choose your niche(s)");
  });
});

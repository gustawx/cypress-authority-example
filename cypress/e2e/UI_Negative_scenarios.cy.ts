describe("Request access page - negative - SAMPLE TEST", () => {
  it("should display an error message for missing name", () => {
    cy.visit("/");
    cy.get("#email").type(
      `${(Math.random() + 1).toString(36).substring(8)}@gmail.com`
    );
    cy.get("#business_type").select("Newbie", { force: true });
    cy.get(".niche-icon.icon-lifestyle").click();
    cy.get("#registerBtn").click();
    cy.get("#fullname-error")
      .should("exist")
      .and("have.text", "This field is required.");
  });

  it("should display an error message for missing email", () => {
    cy.visit("/");
    cy.get("#fullname").type("John Doe");
    cy.get("#business_type").select("Newbie", { force: true });
    cy.get(".niche-icon.icon-lifestyle").click();
    cy.get("#registerBtn").click();
    cy.get("#email-error")
      .should("exist")
      .and("have.text", "This field is required.");
  });

  it("should display an error message for not selected business type", () => {
    cy.visit("/");
    cy.get("#fullname").type("John Doe");
    cy.get("#email").type(
      `${(Math.random() + 1).toString(36).substring(8)}@gmail.com`
    );
    cy.get(".niche-icon.icon-lifestyle").click();
    cy.get("#registerBtn").click();
    cy.get("span").should("contain.text", "Please select Business Type")
  });

  it("should display an error message for not selected niche", () => {
    cy.visit("/");
    cy.get("#fullname").type("John Doe");
    cy.get("#email").type(
      `${(Math.random() + 1).toString(36).substring(8)}@gmail.com`
    );
    cy.get("#business_type").select("Newbie", { force: true });
    cy.get("#registerBtn").click();
    cy.get("span").should("contain.text", "Please choose your niche(s)")
  });
});

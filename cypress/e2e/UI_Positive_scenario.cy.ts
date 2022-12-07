describe("Request access page - positive - SAMPLE TEST", () => {
  it("should allow user to successfully request the access", () => {
    cy.visit("/");
    cy.get("#fullname").type("John Doe");
    cy.get("#email").type(
      `${(Math.random() + 1).toString(36).substring(8)}@gmail.com`
    );
    cy.get("#business_type").select("Newbie", { force: true });
    cy.get(".niche-icon.icon-lifestyle").click();
    cy.get("#registerBtn").click();
    cy.get("h1").should(
      "have.text",
      "Thank you for applying to Authority Builders!"
    );
    cy.get("h2").should("have.text", "FAQ");
  });
});

export const enterRandomEmail = () =>
  cy
    .get("#email")
    .type(`${(Math.random() + 1).toString(36).substring(8)}@gmail.com`);

export const enterFullName = (name: string) => cy.get("#fullname").type(name);

export const selectBusinessType = (bType: string) =>
  cy.get("#business_type").select(bType, { force: true });

export const selectLifeStyleNiche = () =>
  cy.get(".niche-icon.icon-lifestyle").click();

export const clickRequestAccessButton = () => cy.get("#registerBtn").click();

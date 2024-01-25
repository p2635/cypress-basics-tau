// Introduction to Cypress, Chapter 7 - Assertions
describe("Assertions", () => {
  // Check bread card is visible after creating the card
  it("create bread card and check is visible", () => {
    cy.visit("/board/1");

    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");

    cy.contains("bread").should("be.visible");
  });

  // Create two cards and check there are in fact two cards created
  it("create two cards and check there are in fact two cards created", () => {
    cy.visit("/board/1");

    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");
    cy.get('[data-cy="new-card-input"]').type("milk{enter}");

    cy.get('[data-cy="card"]').should("have.length", 2);
  });

  // Create a list called 'groceries', create a card and complete it. Check the due date is green.
  it.only("complete a task and check due date shows as completed", () => {
    cy.visit("/board/1");
    cy.get('[data-cy="add-list-input"]').type("groceries{enter}");
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");
    cy.get('[data-cy="due-date"]').should("not.have.class", "completed");

    cy.contains(".card", "bread").find('[type="checkbox"]').check();
    cy.contains(".card", "bread")
      .find('[type="checkbox"]')
      .should("be.checked");

    cy.get('[data-cy="due-date"]').should("have.class", "completed");
  });
});

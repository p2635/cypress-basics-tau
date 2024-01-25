// Introduction to Cypress, Chapter 6 - Interactions
describe("Interactions", () => {
  it("creates a new list and a new card by pressing enter", () => {
    cy.visit("/board/1");
    cy.get('[data-cy="add-list-input"]').type("New List{enter}");
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("hello{enter}");
  });
});

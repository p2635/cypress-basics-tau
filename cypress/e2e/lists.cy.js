// Introduction to Cypress, Chapter 6 - Interactions
describe("List tests", () => {
  before("Reset the data and create the board", () => {
    cy.request("POST", "/api/reset");
    cy.request("POST", "/api/boards", { name: "new board" });
  });

  beforeEach("Visit the board", () => {
    cy.visit("/board/1");
  });

  it("creates a new list and a new card by pressing enter", () => {
    cy.get('[data-cy="add-list-input"]').type("New List{enter}");
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("hello{enter}");
  });
});

describe("Introduction to Cypress", () => {
  // 03 - First Command
  it("Visit Trello", () => {
    cy.visit("/");
  });

  // 04 - Cypress Studio
  it("Cypress Studio", () => {
    cy.visit("/");
  });

  // 05 - Selectors
  it("Selectors", () => {
    cy.visit("/");
    cy.contains(".board", "new board");
    cy.get(".board");
    cy.get("#board-1");
    cy.get("[data-cy=board-item]");
  });

  // 06 - Interactions
  it("creates a new list and a new card", () => {
    cy.visit("/board/1");
  });

  // 07 - Assertions
  it("cards are visible", () => {
    cy.visit("/board/1");
  });

  // 08 - Chaining and Retry
  it("chaining and retrying", () => {
    cy.visit("/board/1");
    cy.contains("[data-cy=card]", "Jun 26 2023");
  });

  // 09 - Plugins
  it("plugins", () => {
    cy.visit("/");
  });
});

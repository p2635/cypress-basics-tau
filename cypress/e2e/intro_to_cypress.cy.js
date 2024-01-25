describe("Introduction to Cypress", () => {
  // 03 - First Command
  it("Visit Trello", () => {
    cy.visit("/");
  });

  // 04 - Cypress Studio
  it("Cypress Studio", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="first-board"]').type("Testing one to three");
    /* ==== End Cypress Studio ==== */
  });

  // 05 - Selectors
  // Prerequisite - The board must be already created.
  it("Selectors", () => {
    cy.visit("/");
    cy.contains(".board", "new board");
    cy.get(".board");
    cy.get("#board-1");
    cy.get("[data-cy=board-item]").first();
  });

  // 06 - Interactions
  it("creates a new list and a new card by pressing enter", () => {
    cy.visit("/board/1");
    cy.get('[data-cy="add-list-input"]').type("New List{enter}");
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("hello{enter}");
  });

  // 07 - Assertions
  // Check bread card is visible after creating the card
  it("create bread card and check is visible", () => {
    cy.visit("/board/1");

    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");

    cy.contains("bread").should("be.visible");
  });

  // 07 - Assertions
  // Create two cards and check there are in fact two cards created
  it("create two cards and check there are in fact two cards created", () => {
    cy.visit("/board/1");

    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");
    cy.get('[data-cy="new-card-input"]').type("milk{enter}");

    cy.get('[data-cy="card"]').should("have.length", 2);
  });

  // 07 - Assertions
  // Create a list called 'groceries', create a card and complete it. Check the due date is green.
  it.only("complete a task and check due date shows as completed", () => {
    cy.visit("/board/1");
    cy.get('[data-cy="add-list-input"]').type("groceries{enter}");
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");
    cy.get('[data-cy="due-date"]').should("not.have.class", "completed");

    cy.contains("bread").prev("label").children().check();

    cy.get('[data-cy="due-date"]').should("have.class", "completed");
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

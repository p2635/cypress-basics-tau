import { cardsLoadSlowly, cardsLoadRandomly } from "../../evilCode";

describe("Introduction to Cypress", () => {
  // Chapter 03 - First Command
  it("Visit Trello", () => {
    cy.visit("/");
  });

  // Chapter 04 - Cypress Studio
  it("Cypress Studio", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="first-board"]').type("Testing one to three");
    /* ==== End Cypress Studio ==== */
  });

  // Chapter 05 - Selectors
  // Prerequisite - The board must be already created.
  it("Selectors", () => {
    cy.visit("/");
    cy.contains(".board", "new board");
    cy.get(".board");
    cy.get("#board-1");
    cy.get("[data-cy=board-item]").first();
  });

  // Chapter 06 - Interactions
  it("creates a new list and a new card by pressing enter", () => {
    cy.visit("/board/1");
    cy.get('[data-cy="add-list-input"]').type("New List{enter}");
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("hello{enter}");
  });

  // Chapter 07 - Assertions
  // Check bread card is visible after creating the card
  it("create bread card and check is visible", () => {
    cy.visit("/board/1");

    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");

    cy.contains("bread").should("be.visible");
  });

  // Chapter 07 - Assertions
  // Create two cards and check there are in fact two cards created
  it("create two cards and check there are in fact two cards created", () => {
    cy.visit("/board/1");

    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");
    cy.get('[data-cy="new-card-input"]').type("milk{enter}");

    cy.get('[data-cy="card"]').should("have.length", 2);
  });

  // Chapter 07 - Assertions
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

  // Chapter 08 - Chaining and Retry
  it("get Cypress to check for at least 10s max", () => {
    // Prereqs - set up two lists: groceries (bread and milk, with due dates),
    // and drugstore (soap and shampoo, with the same due dates as groceries).
    cy.visit("/board/1");
    cardsLoadSlowly(6000);
    cy.get("[data-cy=card]", { timeout: 10000 });
  });

  // Chapter 08 - Chaining and Retry
  it("get shampoo even if other cards load first", () => {
    // Prereqs - set up two lists: groceries (bread and milk, with due dates),
    // and drugstore (soap and shampoo, with the same due dates as groceries).
    cy.visit("/board/1");
    // Make sure shampoo doesn't always show
    cardsLoadRandomly(6000);

    cy.get("[data-cy=card]", { timeout: 10000 }).contains("shampoo").click();
    cy.get('[data-cy="card-detail-title"]').should("have.value", "shampoo");
  });

  // 09 - Plugins - skipping because I do not want to sign up
  // to Applitools yet.
});

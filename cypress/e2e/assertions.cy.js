// Introduction to Cypress, Chapter 7 - Assertions
describe("Assertions", () => {
  before("Reset the data and create the board", () => {
    cy.request("POST", "/api/reset");
    cy.request("POST", "/api/boards", { name: "new board" });
    cy.request("POST", "/api/lists", { boardId: 1, name: "groceries" });
  });

  beforeEach("Clear cards then visit board", () => {
    cy.request("DELETE", "/api/cards");
    cy.visit("/board/1");
  });

  it("create bread card and check is visible", () => {
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");

    cy.contains("bread").should("be.visible");
  });

  it("create two cards and check there are in fact two cards created", () => {
    cy.get('[data-cy="new-card"]').click();
    cy.get('[data-cy="new-card-input"]').type("bread{enter}");
    cy.get('[data-cy="new-card-input"]').type("milk{enter}");

    cy.get('[data-cy="card"]').should("have.length", 2);
  });

  it("complete a task and check due date shows as completed", () => {
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

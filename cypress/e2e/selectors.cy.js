// Introduction to Cypress, Chapter 5 - Selectors
describe("Selectors", () => {
  before("Reset the data and create the boards", () => {
    cy.request("POST", "/api/reset");
    cy.request("POST", "/api/boards", { name: "new board" });
    cy.request("POST", "/api/boards", { name: "new board 2" });
  });

  beforeEach("Visit Trello boards page", () => {
    cy.visit("/");
  });

  it("get boards by class", () => {
    cy.get(".board");
  });

  it("get boards by class and text", () => {
    cy.contains(".board", "new board");
    cy.contains(".board", "new board 2");
  });

  it("get boards by id", () => {
    cy.get("#board-1");
    cy.get("#board-2");
  });

  it("get board by attribute", () => {
    cy.get("[data-cy=board-item]");
  });

  it("get the first board by attribute", () => {
    cy.get("[data-cy=board-item]").first();
  });

  it("get the second board by attribute (assuming it's the last)", () => {
    cy.get("[data-cy=board-item]").last();
  });
});

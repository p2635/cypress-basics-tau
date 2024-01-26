// Introduction to Cypress, Chapter 8 - Chaining and Retry
import { cardsLoadSlowly, cardsLoadRandomly } from "../../evilCode";

describe("Cards tests with loading delays", () => {
  before("Reset the data and create the test data", () => {
    cy.request("POST", "/api/reset");
    cy.request("POST", "/api/boards", { name: "new board" });
    cy.request("POST", "/api/lists", { boardId: 1, name: "groceries" });
    cy.request("POST", "/api/lists", { boardId: 1, name: "drugstore" });
    cy.request("POST", "/api/cards", { boardId: 1, listId: 1, name: "bread" });
    cy.request("POST", "/api/cards", { boardId: 1, listId: 1, name: "milk" });
    cy.request("POST", "/api/cards", { boardId: 1, listId: 2, name: "soap" });
    cy.request("POST", "/api/cards", {
      boardId: 1,
      listId: 2,
      name: "shampoo",
    });
  });

  beforeEach("Visit the board", () => {
    cy.visit("/board/1");
  });

  it("get Cypress to check for at least 10s max", () => {
    cardsLoadSlowly(6000);
    cy.get("[data-cy=card]", { timeout: 10000 });
  });

  it(
    "get shampoo even if other cards load first",
    {
      timeout: 10000,
    },
    () => {
      // Make sure shampoo doesn't always load first
      cardsLoadRandomly(6000);

      cy.get("[data-cy=card]").contains("shampoo").click();
      cy.get('[data-cy="card-detail-title"]').should("have.value", "shampoo");
    }
  );
});

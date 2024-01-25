// Introduction to Cypress, Chapter 8 - Chaining and Retry
import { cardsLoadSlowly, cardsLoadRandomly } from "../../evilCode";

describe("Chaining and Retry", () => {
  it("get Cypress to check for at least 10s max", () => {
    // Prereqs - set up two lists: groceries (bread and milk, with due dates),
    // and drugstore (soap and shampoo, with the same due dates as groceries).
    cy.visit("/board/1");
    cardsLoadSlowly(6000);
    cy.get("[data-cy=card]", { timeout: 10000 });
  });

  it("get shampoo even if other cards load first", () => {
    // Prereqs - set up two lists: groceries (bread and milk, with due dates),
    // and drugstore (soap and shampoo, with the same due dates as groceries).
    cy.visit("/board/1");
    // Make sure shampoo doesn't always show
    cardsLoadRandomly(6000);

    cy.get("[data-cy=card]", { timeout: 10000 }).contains("shampoo").click();
    cy.get('[data-cy="card-detail-title"]').should("have.value", "shampoo");
  });
});

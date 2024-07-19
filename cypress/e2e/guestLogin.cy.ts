// Import common util
import { checkIfElementExist, checkStatus200ForLink } from "./util/common.util";

import { GuestLoginPages } from "./pages/guestLogin.page";

const guestLoginPages = new GuestLoginPages();

describe("Guest Login", () => {
  beforeEach(() => {
    cy.visit("spiritual/bookstore");
  });

  it("should have open Bookstore Page then select AOY and give 200 OK status", () => {
    checkStatus200ForLink(
      guestLoginPages.btnAOYproduct
    );
  });

  it("should open AOY Product page", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    cy.url().should("include", guestLoginPages.linkAOYproduct);
  });

  it("AOY Product page should have Add to Cart button", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    checkIfElementExist(guestLoginPages.btnAddToCart);
  });


  it("should open Cart page", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    cy.get(guestLoginPages.btnAddToCart).click();

    cy.url().should("include", guestLoginPages.linkCart);
  });

  it("Cart page should have Proceed to Checkout button", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    cy.get(guestLoginPages.btnAddToCart).click();

    checkIfElementExist(guestLoginPages.btnCheckout);
  });

  it("should open Checkout Page", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    cy.get(guestLoginPages.btnAddToCart).click();

    cy.get(guestLoginPages.btnCheckout).click();

    cy.url().should("include", guestLoginPages.linkCheckout);
  });
});

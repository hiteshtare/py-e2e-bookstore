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

  it("should open AOY product Page", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    cy.url().should("include", guestLoginPages.linkAOYproduct);
  });

  it("AOY product Page should have Add to Cart button", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    checkIfElementExist(guestLoginPages.btnAddToCart);
  });


  it.only("should open Cart Page", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    checkIfElementExist(guestLoginPages.btnAddToCart);

    cy.get(guestLoginPages.btnAddToCart).click();

    cy.url().should("include", guestLoginPages.linkCart);
  });
});

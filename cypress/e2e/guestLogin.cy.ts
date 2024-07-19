// Import common util
import { checkStatus200ForLink } from "./util/common.util";

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

  it("should have open AOY product Page", () => {
    cy.get(guestLoginPages.btnAOYproduct).click();

    cy.url().should("include", guestLoginPages.linkAOYproduct);
  });
});

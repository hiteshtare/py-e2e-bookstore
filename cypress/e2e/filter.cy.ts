// Import common util
import {
  checkIfElementIsVisible_Contains,
} from "./util/common.util";

import { FilterPages } from "./pages/filter.page";

const filterPages = new FilterPages();

describe("Filter menu", () => {
  describe("Product Category: Books", () => {
    beforeEach(() => {
      cy.visit("/product-category/books");
    });

    describe("Overall working", () => {
      it("Filter menu should be visible by default", () => {
        checkIfElementIsVisible_Contains(filterPages.divFilterMenuText);
      });
    });

    describe("dropdown: Categories", () => {
      it("dropdown: Categories - should have default value as ", () => {
        cy.get(filterPages.bookDropdownCategories)
          .select(0)
          .should("have.value", "");
      });

      it("dropdown: Authors - should have default value as ", () => {
        cy.get(filterPages.bookDropdownAuthors).select(0).should("have.value", "");
      });

      it("dropdown: Languages - should have default value as ", () => {
        cy.get(filterPages.bookDropdownLanguages)
          .select(0)
          .should("have.value", "");
      });

      it("dropdown: Formats - should have default value as ", () => {
        cy.get(filterPages.bookDropdownFormats).select(0).should("have.value", "");
      });
    });
  });

  describe("Product Category: Audio", () => {
    beforeEach(() => {
      cy.visit("/product-category/audio");
    });

    describe("Overall working", () => {
      it("Filter menu should be visible by default", () => {
        checkIfElementIsVisible_Contains(filterPages.divFilterMenuText);
      });
    });

    describe("dropdown: Categories", () => {
      it("dropdown: Categories - should have default value as ", () => {
        cy.get(filterPages.audioDropdownCategories)
          .select(0)
          .should("have.value", "");
      });

      it("dropdown: Formats - should have default value as ", () => {
        cy.get(filterPages.audioDropdownFormats).select(0).should("have.value", "");
      });
    });
  });
});

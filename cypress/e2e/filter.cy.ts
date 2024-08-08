// Import common util
import {
  checkIfElementIsClickable,
  checkIfElementIsVisible,
  checkIfElementNotVisible,
} from "./util/common.util";

import { FilterPages } from "./pages/filter.page";

const filterPages = new FilterPages();

describe("Filter menu", () => {
  beforeEach(() => {
    cy.visit("/product-category/books");
  });

  describe("Product Category: Books", () => {
    
    describe("Overall working", () => {
      it("Filter menu should be visible by default", () => {
        checkIfElementIsVisible(filterPages.divFilterMenu);
      });
    });

    describe("dropdown: Categories", () => {
      it("dropdown: Categories - should have default value as ", () => {
        cy.get(filterPages.dropdownCategories)
          .select(0)
          .should("have.value", "");
      });

      // it("dropdown: Media Type - should have 1st option equal to (text/value) Audio:7948", () => {
      //   cy.get(filterPages.dropdownMediaType)
      //     .select(1)
      //     .should("have.value", filterPages.dropdownMediaType_AudioValue);
      // });

      // it("dropdown: Media Type - should have 2nd option equal to (text/value) Video:7949", () => {
      //   cy.get(filterPages.dropdownMediaType)
      //     .select(2)
      //     .should("have.value", filterPages.dropdownMediaType_VideoValue);
      // });

      // it("dropdown: Media Type - 1st option selection should work", () => {
      //   filterPages.selectDropdownOptionByValue(
      //     filterPages.dropdownMediaType_AudioValue
      //   );
      // });

      // it("dropdown: Media Type - 2nd option selection should work", () => {
      //   filterPages.selectDropdownOptionByValue(
      //     filterPages.dropdownMediaType_VideoValue
      //   );
      // });
    });
  });
});

// Import common util
import {
  checkIfElementIsVisible_Contains,
  checkIfElementNotExist_Contains,
} from "./util/common.util";

import { FilterPages } from "./pages/filter.page";

const filterPages = new FilterPages();

describe("Filter menu", () => {
  describe("Product Category: Books", () => {
    beforeEach(() => {
      cy.visit("/product-category/books");
    });

    describe("Overall working", () => {
      it("Books >> Filter menu should be visible by default", () => {
        checkIfElementIsVisible_Contains(filterPages.divFilterMenuText);
      });
    });

    describe("dropdown: Categories", () => {
      it("Books >>  dropdown: Categories - should have default value as ", () => {
        cy.get(filterPages.bookDropdownCategories)
          .select(0)
          .should("have.value", "");
      });

      it("Books >> dropdown: Authors - should have default value as ", () => {
        cy.get(filterPages.bookDropdownAuthors).select(0).should("have.value", "");
      });

      it("Books >> dropdown: Languages - should have default value as ", () => {
        cy.get(filterPages.bookDropdownLanguages)
          .select(0)
          .should("have.value", "");
      });

      it("Books >> dropdown: Formats - should have default value as ", () => {
        cy.get(filterPages.bookDropdownFormats).select(0).should("have.value", "");
      });
    });
  });

  describe("Product Category: eBooks", () => {
    beforeEach(() => {
      cy.visit("/ebooks");
    });

    describe("Overall working", () => {
      it("eBooks >> Filter menu should be visible by default", () => {
        checkIfElementNotExist_Contains(filterPages.divFilterMenuText);
      });
    });
  });

  describe("Product Category: Audio", () => {
    beforeEach(() => {
      cy.visit("/product-category/audio");
    });

    describe("Overall working", () => {
      it("Audio >> Filter menu should be visible by default", () => {
        checkIfElementIsVisible_Contains(filterPages.divFilterMenuText);
      });
    });

    describe("dropdown: Categories", () => {
      it("Audio >> dropdown: Categories - should have default value as ", () => {
        cy.get(filterPages.audioDropdownCategories)
          .select(0)
          .should("have.value", "");
      });

      it("Audio >> dropdown: Categories - should have default value as ", () => {
        cy.get(filterPages.audioDropdownSpeakers)
          .select(0)
          .should("have.value", "");
      });

      it("Audio >> dropdown: Formats - should have default value as ", () => {
        cy.get(filterPages.audioDropdownFormats).select(0).should("have.value", "");
      });
    });
  });

  describe("Product Category: Photos", () => {
    beforeEach(() => {
      cy.visit("/product-category/photos");
    });

    describe("Overall working", () => {
      it("Photos >> Filter menu should be visible by default", () => {
        checkIfElementNotExist_Contains(filterPages.divFilterMenuText);
      });
    });
  });

  describe("Product Category: Devotional", () => {
    beforeEach(() => {
      cy.visit("/product-category/devotional-articles");
    });

    describe("Overall working", () => {
      it("Devotional >> Filter menu should be visible by default", () => {
        checkIfElementNotExist_Contains(filterPages.divFilterMenuText);
      });
    });
  });

  describe("Product Category: Video", () => {
    beforeEach(() => {
      cy.visit("/product-category/video");
    });

    describe("Overall working", () => {
      it("Video >> Filter menu should be visible by default", () => {
        checkIfElementNotExist_Contains(filterPages.divFilterMenuText);
      });
    });
  });
});

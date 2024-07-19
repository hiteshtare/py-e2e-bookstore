// Import pages
import { ProductPreviewPages } from "./pages/productPreview.page";

// Import custom modules
import { openHindiPage, openTamilPage, openTeluguPage } from "./util/common.util";

const productPreviewPages = new ProductPreviewPages();

describe.skip("Magazines & Product Preview", () => {
  describe("yogoda-satsanga-magazine: Tab1", () => {
    beforeEach(() => {
      cy.visit("spiritual/yogoda-satsanga-magazine");
    });

    it("Tab1 >> Yogoda Satsanga Magazine:Click to preview should have new Preview link and give 200 OK status", () => {
      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("HINDI - Tab1 >> Yogoda Satsanga Magazine:Click to preview should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("TAMIL - Tab1 >> Yogoda Satsanga Magazine:Click to preview should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("TELUGU - Tab1 >> Yogoda Satsanga Magazine:Click to preview should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });
  });

  describe("blog/special-commemorative-coin-now-available", () => {
    beforeEach(() => {
      cy.visit(
        "blog/special-commemorative-coin-now-available"
      );
    });

    it("should have new Preview link and give 200 OK status", () => {
      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnVideoEmbedHover
      );
    });

    it("HINDI - should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnVideoEmbedHover
      );
    });

    it("TAMIL - should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnVideoEmbedHover
      );
    });

    it("TELUGU - should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnVideoEmbedHover
      );
    });
  });
});

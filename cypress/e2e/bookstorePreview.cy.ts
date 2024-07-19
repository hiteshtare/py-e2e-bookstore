// Import pages
import { BookstorePreviewPages } from "./pages/bookstorePreview.page";

// Import custom modules
const bookstorePreviewPages = new BookstorePreviewPages();

//Import test data for Books
const testDataForBooks = require("../fixtures/bookstore_book.json");
const testDataForAudio = require("../fixtures/bookstore_audio.json");

describe.skip("Bookstore", () => {
  describe("magazine: Subscription", () => {
    beforeEach(() => {
      cy.visit("product/yogoda-satsanga-magazine-subscription");
    });

    it("Yogoda Satsanga Magazine Subscription should have new Preview link and give 200 OK status", () => {
      bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
        bookstorePreviewPages.btnLookInsideSubscription
      );
    });

    it("HINDI - Yogoda Satsanga Magazine Subscription should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickHindiLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInsideSubscription
      );
    });

    it("BENGALI - Yogoda Satsanga Magazine Subscription should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickBengaliLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInsideSubscription
      );
    });
  });

  describe("magazine: Yogoda Satsanga Magazine 2023 Annual Issue", () => {
    beforeEach(() => {
      cy.visit("product/yogoda-satsanga-magazine-2023-annual-issue");
    });

    it("Yogoda Satsanga Magazine 2023 Annual Issue should have new Preview link and give 200 OK status", () => {
      bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
        bookstorePreviewPages.btnLookInsideIndividualIssue
      );
    });

    it("HINDI - Yogoda Satsanga Magazine 2023 Annual Issue should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickHindiLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInsideIndividualIssue
      );
    });

    it("BENGALI - Yogoda Satsanga Magazine 2023 Annual Issue should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickBengaliLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInsideIndividualIssue
      );
    });
  });

  describe("magazine: Yogoda Satsanga Magazine 2022 Annual Issue", () => {
    beforeEach(() => {
      cy.visit("product/yogoda-satsanga-magazine-2022-annual-issue");
    });

    it("Yogoda Satsanga Magazine 2022 Annual Issue should have new Preview link and give 200 OK status", () => {
      bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
        bookstorePreviewPages.btnLookInsideIndividualIssue
      );
    });

    it("HINDI - Yogoda Satsanga Magazine 2022 Annual Issue should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickHindiLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInsideIndividualIssue
      );
    });

    it("BENGALI - Yogoda Satsanga Magazine 2022 Annual Issue should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickBengaliLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInsideIndividualIssue
      );
    });
  });

  describe("product: Paramahansa Yogananda Commemorative Coin", () => {
    beforeEach(() => {
      cy.visit("product/paramahansa-yogananda-commemorative-coin");
    });

    it("Paramahansa Yogananda Commemorative Coin should have new Preview link and give 200 OK status", () => {
      bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
        bookstorePreviewPages.btnVideoEmbedHover
      );
    });
  });

  describe("books: Dynamic data test", () => {
    testDataForBooks.forEach((testCase: any, index: number) => {
      let pattern = /-\d+$/;

      const isMatch = pattern.test(testCase.post_name);

      //To check if match is true skip else open the page and run tests
      if (!isMatch) {
        it(`#${index+1} Book with Title:${testCase.post_title} should have new Preview link and give 200 OK status`, () => {
          cy.visit(`product/${testCase.post_name}`);

          cy.log(`#${index+1} Book with postname: ${testCase.post_name}`);

          bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
            bookstorePreviewPages.btnLookInsideForBooks
          );
        });
      }
    });
  });

  describe("audio: Dynamic data test", () => {
    testDataForAudio.forEach((testCase: any, index: number) => {
      it(`#${index+1} Audio with Title:${testCase.post_title} should have new Preview link and give 200 OK status`, () => {
        cy.visit(`product/${testCase.post_name}`);

        cy.log(`#${index+1} Audio with postname: ${testCase.post_name}`);

        bookstorePreviewPages.validateNewlinkAndStatusCode200ForAudio(
          bookstorePreviewPages.btnForAudioPreview
        );
      });
    });
  });
});

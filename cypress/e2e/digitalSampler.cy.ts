// Import pages
import { DigitalSamplerPages } from "./pages/digitalSampler.page";

// Import custom modules
import { openHindiPage, openTamilPage, openTeluguPage } from "./util/common.util";

const digitalSamplerPages = new DigitalSamplerPages();

describe.skip("Flipbooks / Digital Samplers", () => {
  describe("yss-lessons", () => {
    beforeEach(() => {
      cy.visit("yss-lessons");
    });

    it("btnYSSLessons should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("HINDI - btnYSSLessons should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("TAMIL - btnYSSLessons should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("TELUGU - btnYSSLessons should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });
  });

  describe("yogoda-satsanga-magazine: Tab2", () => {
    beforeEach(() => {
      cy.visit("spiritual/yogoda-satsanga-magazine");
    });

    it("Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new Preview link and give 200 OK status", () => {
      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });

    it("HINDI - Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });

    it("TAMIL - Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });

    it("TELUGU - Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });
  });

  describe("voice-of-paramahansa-yogananda-free-download", () => {
    beforeEach(() => {
      cy.visit("voice-of-paramahansa-yogananda-free-download");
    });

    it("btnReadIntroductoryLesson should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnReadIntroductoryLesson
      );
    });
  });

  describe("about/request-free-literature", () => {
    beforeEach(() => {
      cy.visit("about/request-free-literature");
    });

    it("Product Catalogue column should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnProductCatalogueColumn
      );
    });

    it("HINDI - Product Catalogue column should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnProductCatalogueColumn
      );
    });

    it("TAMIL - Product Catalogue column should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnProductCatalogueColumn
      );
    });

    it("TELUGU - Product Catalogue column should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnProductCatalogueColumn
      );
    });
  });

  describe("blog/6-spiritually-revolutionary-ideas", () => {
    beforeEach(() => {
      cy.visit(
        "blog/6-spiritually-revolutionary-ideas-that-paramahansa-yogananda-brought-to-the-world-by-swami-chidananda-giri"
      );
    });

    it("btn6SpirituallyRevolutionaryIdeas should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("HINDI - btn6SpirituallyRevolutionaryIdeas should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("TAMIL - btn6SpirituallyRevolutionaryIdeas should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("TELUGU - btn6SpirituallyRevolutionaryIdeas should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });
  });

  describe("blog/thank-you-for-your-love-support-and-prayers", () => {
    beforeEach(() => {
      cy.visit(
        "blog/thank-you-for-your-love-support-and-prayers"
      );
    });

    it("ENGLISH - btnThankYouForYourLove should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnThankYouForYourLove
      );
    });

    it("HINDI - btnThankYouForYourLove should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnThankYouForYourLove
      );
    });

    it("TAMIL - btnThankYouForYourLove should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnThankYouForYourLove
      );
    });

    it("TELUGU - btnThankYouForYourLove should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnThankYouForYourLove
      );
    });
  });

  describe("blog/jan-mar-2020-issue-of-yogoda-satsanga-magazine-available-in-free-digital-format", () => {
    beforeEach(() => {
      cy.visit(
        "blog/jan-mar-2020-issue-of-yogoda-satsanga-magazine-available-in-free-digital-format"
      );
    });

    it("btnThankYouForYourLove should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnThankYouForYourLove
      );
    });
  });

  describe("blog/newsletter-and-appeal-for-the-new-edition-of-yogoda-satsanga-lessons", () => {
    beforeEach(() => {
      cy.visit("blog/newsletter-and-appeal-for-the-new-edition-of-yogoda-satsanga-lessons");
    });

    it("btnReadCompleteAppeal should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnReadCompleteAppeal
      );
    });
  });

  describe("meditation/what-is-yoga-meditation", () => {
    beforeEach(() => {
      cy.visit(
        "meditation/what-is-yoga-meditation"
      );
    });

    it("btnReadNow should have new Preview link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnReadNow
      );
    });

    it("HINDI - btnReadNow should have new Preview link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnReadNow
      );
    });

    it("TAMIL - btnReadNow should have new Preview link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnReadNow
      );
    });

    it("TELUGU - btnReadNow should have new Preview link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnReadNow
      );
    });
  });

});

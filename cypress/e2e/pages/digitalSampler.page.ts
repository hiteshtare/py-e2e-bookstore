// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class DigitalSamplerPages {
  btn6SpirituallyRevolutionaryIdeas =
    ".elementor-element-ff6504f > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > :nth-child(3) > a";
  btnYSSLessons = ".elementor-button.elementor-button-link.elementor-size-sm";
  btnThankYouForYourLove = 'a[href$="amplers/ysm-i-2020/index.html"]';
  btnReadNow = '.elementor-element-5915a4c > .elementor-widget-container > .elementor-button-wrapper > .elementor-button';
  btnReadTheJanMar2020issue = 'a[href$="amplers/ysm-i-2020/index.html"]';
  btnReadIntroductoryLesson = 'body > div.elementor.elementor-24684.elementor-location-single.post-126957.page.type-page.status-publish.hentry > section.elementor-section.elementor-top-section.elementor-element.elementor-element-41b2eb9.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7dff14f.elementor-section-content-middle.elementor-reverse-tablet.elementor-reverse-mobile.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-5a21e37 > div > div.elementor-element.elementor-element-8a34d5e.elementor-widget.elementor-widget-text-editor > div > p:nth-child(2) > a';
  btnReadCompleteAppeal = 'body > div.elementor.elementor-23294.elementor-location-single.post-7481.blog.type-blog.status-publish.has-post-thumbnail.hentry.blog-category-news > section.elementor-section.elementor-top-section.elementor-element.elementor-element-bd67779.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-aaee4ce.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > a';
  btnProductCatalogueColumn = '#eael-data-table-284ab74 > tbody > tr:nth-child(1) > td:nth-child(4) > div > div.td-content > p > a';

  //Commemorative Coin
  btnVideoEmbedHover = 'a[href$="commemorative-coin/index.html"]';
  
  //Second Tab
  btnSecondTab = "#samplearticles";
  btnTab2ReadThisSample =
    ".elementor-element-e50625e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button";
  
  //Other 6 magazine links:
  btnTab2AreWeReallyEnteringaBetterAge = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2b34f0f.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-514222e > div > div.elementor-element.elementor-element-b1cbdc3.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2CouragetoFaceOurFears = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2b34f0f.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1907ebe > div > div.elementor-element.elementor-element-366a0c6.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2YogaandtheEmotions = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2b34f0f.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-6a12445 > div > div.elementor-element.elementor-element-8ee2b27.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2TheYogaSadhana  = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d696bc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-afef2b3 > div > div.elementor-element.elementor-element-bfe478d.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2PurchasingEternity = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d696bc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-54cc0e8 > div > div.elementor-element.elementor-element-a4abb29.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2PractisingtheDivinePresence = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d696bc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-b9e0629 > div > div.elementor-element.elementor-element-d248fa7.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  //Second Tab

  validateNewlinkAndStatusCode200(selector: string) {
    captureSreenshot();

    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }

  validateNewlinkAndStatusCode200woScreenshot(selector: string) {
    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }

  clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot() { 
    //Select second Tab: A sampling of articles
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2ReadThisSample
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    //Other 6 magazine links:
    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2AreWeReallyEnteringaBetterAge
    );
    
    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2CouragetoFaceOurFears
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2YogaandtheEmotions
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2TheYogaSadhana
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2PurchasingEternity
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();
    
    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2PractisingtheDivinePresence
    );
    //Other 6 magazine links:
  }

  checkHrefForNewLink(selector: string) {
    cy.get(selector)
      .should("have.attr", "href")
      .and("include", TEST_CONFIG.digitalSampler.link);
  }

  checkStatus200ForNewLink(selector: string) {
    cy.get(selector).then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);

      cy.log(`3DIssue link: ${link.prop("href")}`);

      //Open this new link and take screenshot
      if (!TEST_CONFIG.digitalSampler.skipOpen3DIssueAndTakeScreenshot) {
        this.open3DIssueAndTakeScreenshot(link);
      }
    });
  }

  open3DIssueAndTakeScreenshot(link: JQuery<Element>) {
    // cy.visit(link.prop("href")).wait(3000).screenshot(`3DIssue: ${Cypress.currentTest.title}`,{ overwrite: true });

    cy.visit(link.prop("href"))
      .get(".a44")
      .wait(TEST_CONFIG.waitForScreenshot)
      .screenshot();
  }

  clickOnSecondTab() {
    cy.get(this.btnSecondTab).click();
  }
}

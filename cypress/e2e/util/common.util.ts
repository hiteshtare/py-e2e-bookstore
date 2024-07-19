// Import custom config
import { TEST_CONFIG } from "../config";

export function openHindiPage() {
  cy.get(TEST_CONFIG.buttonWPMLHindi).click();
}

export function openTamilPage() {
  cy.get(TEST_CONFIG.buttonWPMLTamil).click();
}

export function openTeluguPage() {
  cy.get(TEST_CONFIG.buttonWPMLTelugu).click();
}

export function captureSreenshot(seconds=0) {
  cy.wait(seconds).screenshot({ capture: "viewport" });
}

// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class FilterPages {
 
  //On Book
  divFilterMenu = ".elementor-element-7eafdec";

  //Dropdown
  dropdownCategories = ".elementor-element-339adf4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .jet-smart-filters-select > .jet-select > .jet-select__control";
  //Dropdown

  //Checkboxlist
  checkboxlistCategory = '.elementor-element-f4e1846 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .jet-smart-filters-checkboxes > .jet-filter-items-dropdown > .jet-filter-items-dropdown__label';
  checkboxlistSpeaker = '.jet-smart-filters-color-image > .jet-filter-items-dropdown > .jet-filter-items-dropdown__label';
  checkboxlistLanguage = '.elementor-element-b5b9f6e > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .jet-smart-filters-checkboxes > .jet-filter-items-dropdown > .jet-filter-items-dropdown__label';
  //Checkboxlist

  selectDropdownOptionByValue(value: string) {
    cy.get(this.dropdownCategories).select(value);

    captureSreenshot(3000);
  }
}
import { Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class VerbruikPage extends BasePage {
  readonly RADIOBUTTONS_LABELS: string = "label[data-label]";
  readonly EXACT_USAGE_RADIOBUTTON: string = 'button[value="exactUsage"]';
  readonly ESTIMATE_USAGE_RADIOBUTTON: string = 'button[value="estimateUsage"]';
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Weet je het energieverbruik?");
    await this.elementIsVisibleWithText(
      this.RADIOBUTTONS_LABELS,
      "Ja, ik vul mijn verbruik zelf in"
    );
    await this.elementIsVisibleWithText(
      this.RADIOBUTTONS_LABELS,
      "Nee, help mij inschatten"
    );
  }

  async verifyAndSelectUsageButton(): Promise<void> {
    await this.clickElement(this.ESTIMATE_USAGE_RADIOBUTTON);
    await this.clickElement(this.EXACT_USAGE_RADIOBUTTON);
  }
  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}

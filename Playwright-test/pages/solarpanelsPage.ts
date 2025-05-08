import { Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class SolarPanelPage extends BasePage {
  readonly ZONNEPANELEN_URL: string =
    "/duurzame-energie/bestellen2/zonnepanelen/";
  readonly ZONNEPANELEN_PARAGRAPH: string = 'p[class*="sparky-text"]';
  readonly HAS_PANELS_RADIOBUTTON: string =
    'button[role="radio"][value="hasPanels"]';
  readonly NO_PANELS_RADIOBUTTON: string =
    'button[role="radio"][value="noPanels"]';
  readonly ZONNEPANELEN_LABEL: string = '[class*="sparky-text"]';
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Heb je zonnepanelen?");
    await this.elementIsVisibleWithText(
      this.ZONNEPANELEN_PARAGRAPH,
      "Of wek je op een andere manier stroom op? Dan verwerken we dat in je berekening."
    );
    await this.elementIsVisible(this.HAS_PANELS_RADIOBUTTON);
    await this.elementIsVisibleWithText(
      this.ZONNEPANELEN_LABEL,
      "Ja, ik wek zelf stroom op"
    );
    await this.elementIsVisible(this.NO_PANELS_RADIOBUTTON);
    await this.elementIsVisibleWithText(
      this.ZONNEPANELEN_LABEL,
      "Nee, ik wek zelf geen stroom op"
    );
  }

  async verifyAndSelectSolarPanelButtons(): Promise<void> {
    await this.clickElement(this.HAS_PANELS_RADIOBUTTON);
    await this.clickElement(this.NO_PANELS_RADIOBUTTON);
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}

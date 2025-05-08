import { BasePage } from "../common/basePage.ts";

export class GegevensPage extends BasePage {
  readonly TEXTLINK_DIALOG_PARAGRAPH = "p[class*=sparky-text]";
  readonly CALENDAR_TITLE = "span[class*=sparky-text]";
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContentStartDelivery(): Promise<void> {
    await this.waitForElementWithText(
      "h1",
      "Vanaf wanneer wil je energie ontvangen?"
    );
    await this.elementIsVisibleWithText(
      this.TEXTLINK_DIALOG_PARAGRAPH,
      "Heb je een vast contract? Houd dan rekening met de einddatum van het contract. Zo voorkom je een eventuele opzegboete."
    );

    await this.elementIsVisibleWithText(
      this.CALENDAR_TITLE,
      "Startdatum levering"
    );
    console.log("Select date of delivery");
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}

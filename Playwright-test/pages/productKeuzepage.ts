import { BasePage } from "../common/basePage";

export class ProductKeuzePage extends BasePage {
  readonly TEXTLINK_TITLE = "button[class*=sparky-text-link]";
  readonly TEXTLINK_DIALOG_TEXT = "h2[class*=sparky-heading]";
  readonly TEXTLINK_DIALOG_PARAGRAPH = "p[class*=sparky-text]";
  readonly CLOSE_DIALOG_BUTTON = 'button[data-label="sluiten"]';
  readonly DYNAMIC_RADIOBUTTON = 'button[role="radio"][value="dynamic"]';
  readonly FIXED_RADIOBUTTON = 'button[role="radio"][value="fixed"]';
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Kies je type energiecontract");
    await this.elementIsVisibleWithText(
      this.TEXTLINK_DIALOG_PARAGRAPH,
      "Ga je voor flexibiliteit of liever een vast tarief met een vaste looptijd."
    );
    await this.clickLocator(
      this.page.locator(this.TEXTLINK_TITLE, {
        hasText: "Welk type contracten kan je kiezen",
      })
    );
    await this.waitForElementWithText(
      this.TEXTLINK_DIALOG_TEXT,
      "Welk type contracten kan je kiezen"
    );
    await this.waitForElementWithText(
      this.TEXTLINK_DIALOG_PARAGRAPH,
      "Bij Eneco kies je afhankelijk van je adres en type woning voor een vast contract, een dynamisch contract of een combinatie daarvan. "
    );
    await this.clickLocator(this.page.locator(this.CLOSE_DIALOG_BUTTON));
    await this.elementIsVisible(this.DYNAMIC_RADIOBUTTON);
    await this.elementIsVisible(this.FIXED_RADIOBUTTON);
  }

  async selecProduct(): Promise<void> {
    await this.clickElement(this.FIXED_RADIOBUTTON);
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}

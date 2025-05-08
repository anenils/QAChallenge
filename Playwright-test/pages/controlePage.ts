import { BasePage } from "../common/basePage.ts";

export class ControlePage extends BasePage {
  readonly CONTROLEKEUZE_PARAGRAPH = 'p[class*="sparky-text"]';
  readonly AANMELDEN_MAANDELIJKS_BETALEN =
    'button[data-label="Aanmelden en maandelijks betalen"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Je bent er bijna");
    await this.elementIsVisibleWithText(
      this.CONTROLEKEUZE_PARAGRAPH,
      "Controleer je gegevens, vul je rekeningnummer in en plaats je bestelling onderaan de pagina."
    );
    await this.page.locator(this.AANMELDEN_MAANDELIJKS_BETALEN).isVisible();
    console.log("Last confirm page");
  }
}

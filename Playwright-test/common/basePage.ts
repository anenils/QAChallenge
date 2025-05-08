import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected baseUrl?: string;
  readonly BUTTON_ACCEPT_COOKIE: string = 'button[data-label="Accepteren"]';
  readonly LOAD_SPINNER: string = '[class*="sparky-spinner"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async acceptCookies(): Promise<void> {
    await this.clickElement(this.BUTTON_ACCEPT_COOKIE);
  }

  async clickElement(locatorSelector: string): Promise<void> {
    const element = this.page.locator(locatorSelector);
    await this.waitForElementToBeClickable(element);
    await element.click();
  }

  async clickLocator(locator: Locator): Promise<void> {
    await this.waitForElementToBeClickable(locator);
    await locator.click();
  }
  async elementIsVisible(locatorSelector: string): Promise<void> {
    await expect(this.page.locator(locatorSelector)).toBeVisible();
  }

  async waitForElementToBeClickable(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
  }

  async waitForElementWithText(
    locatorSelector: string,
    text: string,
    timeout?: number
  ): Promise<void> {
    await this.page
      .locator(locatorSelector, { hasText: text })
      .waitFor({ state: "visible", timeout: timeout });
  }
  async elementIsVisibleWithText(
    locatorSelector: string,
    text: string,
    index: number = 0
  ): Promise<void> {
    const locator = this.page
      .locator(locatorSelector)
      .filter({ hasText: text })
      .nth(index);
    await expect(locator).toBeVisible();
  }

  async fillElement(locatorSelector: string, text: string): Promise<void> {
    await this.page.fill(locatorSelector, text);
  }
}

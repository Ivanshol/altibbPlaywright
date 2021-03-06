

exports.Base = class Base {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.dropDownMenu = page.locator('[href="#"][data-toggle="dropdown"] >> nth=1');
    this.medVideosTab = page.locator('[href="/فيديوهات-طبية"] >> nth=1');
    this.medNewsTab = page.locator('[href="/اخبار-طبية"] >> nth=1');
    this.medArticlesTab = page.locator('[href="/مقالات-طبية"] >> nth=1');
    this.socalMediaMenuButton = page.locator('#social').first();
  }

  async goToPreviousPage(){
    await this.page.goBack();
    await this.page.waitForLoadState();
  }

  async gotoSite() {
    await this.page.goto('https://automation.altibb.com/');
    await this.page.waitForLoadState('networkidle');
  }

  async gotoMedicalVideosPage() {
    await this.dropDownMenu.click();
    await this.medVideosTab.click();
  }

  async gotoMedicalNewsPage() {
    await this.dropDownMenu.click();
    await this.medNewsTab.click();
  }

  async gotoMedicalArticlesPage() {
    await this.dropDownMenu.click();
    await this.medArticlesTab.click();
  }

  async clickAnAppointmentButtonAndVerifyPage() {
    await this.page.locator('.ask-doctor-new-button').click();
    await this.page.waitForLoadState('networkidle');
    return this.page.locator('.main-search-header').innerText();
  }

  async assertLatestMedicalVideoIsDisplayed() {
    return this.page.locator('.primary');
  }

}
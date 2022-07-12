
const { expect } = require('@playwright/test');

exports.MedicalArticles = class MedicalArticles {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.allQuestionsButton = page.locator('[href="/اسئلة-طبية/امراض-باطنية"]');
    this.socalMediaMenuButton = page.locator('#social >> nth=0');
  }

  async clickAnArticleHeader() {
    await this.page.locator('body div a h2 >> nth=3').click();
  }

  async visit(){
    await this.page.goto('https://automation.altibb.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A/asdsadsadsadasd-5995');
    }

  async clickAFirstArticleHeader() {
    await this.page.locator('body div a h2 >> nth=1').click();
  }

  async assertFreeSuggestionsTitle() {
    await this.page.locator('body div section header font >> nth=0').click();
    return this.page.locator('body div section header font nth=0');
  }

  async assertQuestionsAreDisplayed(index) {
    await this.page.locator(`[class="question-owner"] >> nth=${index}`).click();
    return this.page.locator(`[class="question-owner"] >> ${index}`);
  }

  async assertAllQuestionsPage() {
    await this.allQuestionsButton.click();
    return this.page.locator('body h1 >> nth=0');
  }

  async goToLatestVideos(){
    await this.page.locator('body div h3 >> nth=1').click();
  }

  async assertLatestVideosAreDisplayed(index) {
    return this.page.locator(`body div h3 >> nth=${index}`);
  }

  async clickAnAppointmentButtonAndVerifyPage() {
    await this.page.locator('[class="ask-doctor-new-button "]').click();
    await expect(this.appointmentLabel).toHaveText('ابحث عن طبيب واحجز موعد بكل سهولة');
    await this.page.goBack();
  }
  
  async assertLatestMedicalVideoIsDisplayed() {
    await this.page.locator('div h3 font font >> nth=2').scrollIntoViewIfNeeded();
    await this.page.locator('div h3 font font >> nth=2').click();
    await expect(this.page.locator('div h3 font font >> nth=2')).toBeVisible;
  }
}
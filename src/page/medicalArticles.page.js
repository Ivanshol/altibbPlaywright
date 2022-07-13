
const { expect } = require('@playwright/test');

exports.MedicalArticles = class MedicalArticles {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.allQuestionsButton = page.locator('.show-all-questions-button');
    this.socalMediaMenuButton = page.locator('#social').first();
  }

  async clickAnArticleHeader() {
    await this.page.locator('//h2[text()="Article sarayreh"]').click();
  }

  async visit(){
    await this.page.goto('https://automation.altibb.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A/asdsadsadsadasd-5995');
    await this.page.waitForLoadState(); 
  }

  async clickAFirstArticleHeader() {
    await this.page.locator('.article-title').first().click();
  }

  async assertFreeSuggestionsTitle() {
    return this.page.locator('header.title-container').innerText();
  }

  async assertQuestionsSectionIsDisplayed(index) {
    return  this.page.locator('.free-question-container');
  }

  async assertAllQuestionsPage() {
    await this.allQuestionsButton.click();
    return this.page.locator('body h1').first();
  }

  async assertLatestVideosAreDisplayed() {
    return this.page.locator('#video-container-inner');
  }

  async clickAnAppointmentButtonAndVerifyPage() {
    await this.page.locator('[class="ask-doctor-new-button "]').click();
    await expect(this.appointmentLabel).toHaveText('ابحث عن طبيب واحجز موعد بكل سهولة');
    await this.page.goBack();
  }
  
}
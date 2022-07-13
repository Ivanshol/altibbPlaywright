
const { expect } = require('@playwright/test');

const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];
exports.MedicalNews = class MedicalNews {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.newsHeader = page.locator('.news-article-title >> nth=1');
    this.appointmentLabel = page.locator('[class="main-search-header"]');
  }

  async clickANewsHeader() {
    await this.newsHeader.click();
  }
  
  async visit(){
  await this.page.goto('https://automation.altibb.com/%D9%81%D9%8A%D8%AF%D9%8A%D9%88%D9%87%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%84%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%8A%D8%A9/%D8%A7%D9%84%D8%B1%D8%AC%D9%81%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%B0%D9%8A%D9%86%D9%8A-%D8%A7%D9%84%D9%82%D9%84%D8%A8-560')
  }


  async clickTalkToDoctorButtonAndVerifyPage() {
    await this.page.locator('[class="news-article-view-inread-cta"]').click();
    return this.page.locator('.ask-question-title').innerText();
  }

  async clickAnAppointmentButtonAndVerifyPage() {
    await this.page.locator('.ask-doctor-new-button').click();
    return this.appointmentLabel;
  }

  async assertLatestMedicalVideoIsDisplayed() {
    return this.page.locator('.primary');
  }

}
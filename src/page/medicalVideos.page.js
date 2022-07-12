
const { expect } = require('@playwright/test');

const { chromium } = require('playwright');
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];
exports.MedicalVideos = class MedicalVideos {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.videoHeader = page.locator('article div a h2 >> nth=1');
    this.socalMediaMenuButton = page.locator('#social >> nth=0');
    this.suggestionsLabel = page.locator('header font font >> nth=0');
    this.socalMediaShareButton = page.locator('article div a');
    this.appointmentLabel = page.locator('[class="main-search-header"]');
    this.freeSuggestionsButton = page.locator('section div a font font');
  }

  async clickAVideoHeader() {
    await this.videoHeader.click();
  }
  
  async visit(){
  await this.page.goto('https://automation.altibb.com/%D9%81%D9%8A%D8%AF%D9%8A%D9%88%D9%87%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%84%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%8A%D8%A9/%D8%A7%D9%84%D8%B1%D8%AC%D9%81%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%B0%D9%8A%D9%86%D9%8A-%D8%A7%D9%84%D9%82%D9%84%D8%A8-560')
  }

  async goToPreviousPage(){
    await this.page.goBack();
  }

  async clickAnAppointmentButtonAndVerifyPage() {
    await this.page.locator('[class="ask-doctor-new-button "]').click();
    return this.appointmentLabel;
  }

  async assertFreeSuggestionsIsDisplayed() {
    await this.suggestionsLabel.click();
    await this.page.locator('section div a font font >> nth=3').click();
    return this.page.url();
  }

  async assertMedicalNewsSectionIsDisplayed() {
    await this.page.locator('[class="question-background-v2 "] >> nth=1').click();
    await this.page.locator('div a[class="title"] >> nth=0').click();
    return this.page.locator('div a[class="title"] >> nth=0');
  }

  async assertLatestMedicalVideoIsDisplayed() {
    await this.page.locator('div h3 font font >> nth=1').scrollIntoViewIfNeeded();
    await this.page.locator('div h3 font font >> nth=1').click();
    await this.page.locator('[class="video-content"]').click();
    return this.page.locator('[class="video-content"]');
  }

}
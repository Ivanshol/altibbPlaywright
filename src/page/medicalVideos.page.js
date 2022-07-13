
const { expect } = require('@playwright/test');

const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];
exports.MedicalVideos = class MedicalVideos {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.videoHeader = page.locator('article div a h2 >> nth=1');
  }

  async clickAVideoHeader() {
    await this.videoHeader.click();
  }
  
  async visit(){
  await this.page.goto('https://automation.altibb.com/%D9%81%D9%8A%D8%AF%D9%8A%D9%88%D9%87%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%84%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%8A%D8%A9/%D8%A7%D9%84%D8%B1%D8%AC%D9%81%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%B0%D9%8A%D9%86%D9%8A-%D8%A7%D9%84%D9%82%D9%84%D8%A8-560')
  await this.page.waitForLoadState();  
}

  async goToPreviousPage(){
    await this.page.goBack();
  }

  async assertFreeSuggestionsLabel() {
    await this.page.locator('.show-all-questions-button').click();
    return this.page.locator('h1.page-title').innerText();
  }

  async assertMedicalNewsSectionIsDisplayed() {
    let newsBlock = this.page.locator('[id=suggested-articles-news]');
    return newsBlock;
  }

  async assertLatestMedicalVideoIsDisplayed() {
    let latestVideoBlock = this.page.locator('#video-container-inner .content');
    return latestVideoBlock;
  }

}
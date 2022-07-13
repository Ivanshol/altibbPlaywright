const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalArticles } = require('../page/medicalArticles.page.js');

test.skip('Altibb2', async ({ page }) => {
    const base = new Base(page);
    const medical = new MedicalArticles(page);
  
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medical.clickAnArticleHeader();
    await expect(await medical.assertFreeSuggestionsTitle()).toContain('أسئلة وإجابات مجانية مقترحة');
    await expect(await medical.assertAllQuestionsPage()).toHaveText('أسئلة واجابات طبية أمراض باطنية');
    await base.goToPreviousPage();
    
  });

  test.skip('Altibb check questions section', async ({ page }) => {
    const base = new Base(page);
    const medical = new MedicalArticles(page);
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medical.clickAnArticleHeader();
    for (let i = 0; i < 4; i++) {
      expect(medical.assertQuestionsAreDisplayed(i)).toBeTruthy();
  }
  });

  test('Altibb check latest videos section', async ({ page }) => {  
    const base = new Base(page);
    const medical = new MedicalArticles(page);
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medical.clickAnArticleHeader();
    for (let i = 0; i < 3; i++) {
      expect(await medical.assertLatestVideosAreDisplayed(i)).toBeTruthy();
  }
  });
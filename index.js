const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  // YOUR CODE STARTS
  const page = await browser.newPage();
  await page.goto('https://www.netflix.com');
  await page.click('text=Sign In');
  await page.fill('#id_userLoginId', 'username');
  await page.fill('#id_password', 'password');
  await page.click('button:has-text("Sign In")');
  // YOUR CODE ENDS
})();

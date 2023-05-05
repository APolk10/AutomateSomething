import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import { wait } from '../time';

// test('checkWeather', async ({ page }) => {
//   await page.goto('https://www.click2houston.com/weather/');
// })



export async function checkWeather() {

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.click2houston.com/weather/');

  await wait(5000);

};
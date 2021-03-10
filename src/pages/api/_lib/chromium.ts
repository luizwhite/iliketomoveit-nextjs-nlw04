import puppeteer, { Page } from 'puppeteer-core';
import { getOptions } from './chromiumOptions';

/* eslint-disable no-underscore-dangle */
let _page: Page | null;

async function getPage(isDev: boolean): Promise<Page> {
  if (_page) return _page;

  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

async function getScreenshot(html: string, isDev: boolean): Promise<Buffer> {
  let page: puppeteer.Page;

  try {
    page = await getPage(isDev);
  } catch (err) {
    return Promise.reject(err);
  }

  await page.setViewport({ width: 1200, height: 628 });
  await page.setContent(html);

  const file = (await page.screenshot({ type: 'png' })) as Buffer;

  return file;
}

// eslint-disable-next-line import/prefer-default-export
export { getScreenshot };

import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.goto(process.env.TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 }).catch(() => {});
await new Promise((r) => setTimeout(r, 5000));
await page.screenshot({ path: "screenshot.png", fullPage: true });
await browser.close();

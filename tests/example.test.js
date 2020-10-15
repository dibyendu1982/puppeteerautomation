const puppeteer = require('puppeteer');
describe("Setup Testing",()=>{
     it("Home landing page",async()=>{
    const browser = await puppeteer.launch({headless:false})
    });
});
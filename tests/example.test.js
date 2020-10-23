const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe("User Login",()=>{
    
    let browser;
    let page;

    before(async function(){
        browser = await puppeteer.launch({
            headless:false,
            slowMo:100
        });
        //browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('https://corillian-olb-mobi-codl.fiservapps.com');
        await page.waitForSelector('input[name=UserName]');
    });

    it("Successful login",async()=>{
        await page.type('input[name=UserName]', 'mobiuser1', {delay: 10});
        await page.type('input[name=Password]', '987654321Ab#', {delay: 10});
        const button = await page.$('input[id=submitCredentials]');
        const navigationPromise = page.waitForNavigation();
        await button.click();
        await navigationPromise;
        await page.waitForSelector('div[class="item-group security-question"]');
        const question = await page.$eval('input[id=QuestionId]', element => element.textContent);
        //expect(question).to.be.not.empty;
    });

    after(async function(){
        await browser.close();
    })
});

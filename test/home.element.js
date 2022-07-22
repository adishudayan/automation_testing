const homePage = require("../pages/homepage");

describe("home page elements handle", function(){

            it("verify home page elements", async function(){
                browser.url('https://www.freshworks.com/');   
                let text =  await homePage.pageHeader.getText();
                 console.log(text);
                await homePage.supportLink.click();
                browser.pause(5000);
            });

});
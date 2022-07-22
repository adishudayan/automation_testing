describe("interaction with web elements",function(){

    it("get header value", async function(){
        browser.url('https://www.freshworks.com/');
        const header = await $('h1');
        let headerText = await header.getText();
       await console.log(headerText);
        // browser.pause(5000);
    
    });





});
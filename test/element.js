describe("interaction with web elements",function(){

        it("enter value in a field", async function(){
            browser.url('https://www.amazon.com/');
            const search = $('#twotabsearchtextbox');
            await search.setValue('Apple Mac Book');
            browser.pause(5000);

            // const label = $('span.a-size-base.a-color-base');
            // let text = label.getText();
            // console.log(text);
            

        });
        it("get text of field",async function(){
            browser.url('https://www.amazon.com/');
            const label =await $('span.a-size-base.a-color-base');
            let text = await label.getText();
            await console.log(text);
        });

        it("click on a field",async function(){
            browser.url('https://www.amazon.com/');
            const icon =await $('input.nav-input.nav-progressive-attribute');
            await icon.click();
        })
        

});
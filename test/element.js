describe("interaction with web elements",function(){

        it("enter value in a field", function(){
            browser.url('/');
            const search = $('#twotabsearchtextbox');
            search.setValue('Apple Mac Book');
            
        
        });
        

});
var expect = require('chai').expect;
describe("Homepage FAQ Accordion", function(){
    beforeEach(function(){
        browser.url("http://www.kevinlamping.com/webdriverio-course-content/");
    })
    it("should show first secion on page load", function(){
       
        var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content","height");
    
        //console.log(firstHeight);
        expect(firstHeight.parsed.value).to.be.greaterThan(0);
    })

    it("should not show other content", function(){

        var secondDisplay = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content","display");
        //console.log(secondDisplay);
        expect(secondDisplay.value).to.equal("none");
    })

    it("should expant/hide content on click",function(){

        this.timeout(15000);
        browser.click(".accordion .accordion-item:nth-of-type(2) a")
       // browser.debug();
       browser.pause(10000);
        var secondHeight = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content","height");
        console.log(secondHeight);
        expect(secondHeight.parsed.value).to.be.greaterThan(0);

        var firstDisplay = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content","display");
        console.log(firstDisplay);
        expect(firstDisplay.value).to.equal("none");
    }) 
    
    })
   
      
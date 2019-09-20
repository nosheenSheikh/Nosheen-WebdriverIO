var expect = require('chai').expect;

browser.addCommand("isVideoPaused",function(){
    var isPaused = browser.execute(function(){
    var video = document.querySelector("#dance-video");
    return video.paused;
})
    return isPaused.value;
})
describe("About us video",function(){

        beforeEach(function(){
            browser.url("http://www.kevinlamping.com/webdriverio-course-content/");
            browser.click("=About Us")
        })

        it("should open the modal with video paused",function(){
            
            var isPaused = browser.isVideoPaused();
            expect(isPaused).to.be.true;
           
        })

        it("Play video on 'play' click", function(){
            browser.click("#play-btn");

            var isPaused = browser.isVideoPaused();
            expect(isPaused).to.be.false;

        })

        it("pause video on 'pause' click", function(){
            browser.click("#play-btn");

            browser.pause(500);

            browser.click("#pause-btn");

            var isPaused = browser.isVideoPaused();
            expect(isPaused).to.be.true;
        })
})
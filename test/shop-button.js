require('chai').should();

describe('Shop CTA Button', function(){
    it('should link to the product page', function(){

    browser.url("http://www.kevinlamping.com/webdriverio-course-content/")
    var title = browser.getTitle()
    title.should.equal('Robot Parts Emporium');
    browser.click('.shop-callout a')
    

    var productTitle = browser.getTitle()
    productTitle.should.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"

        var url = browser.getUrl();
        url.should.include('product-page.html','Url mismatch');
    });
    });


    
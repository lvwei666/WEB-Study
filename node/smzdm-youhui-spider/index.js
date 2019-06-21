const request = require('request');
const cheerio = require('cheerio');
cheerio.prototype.removeTagText = function() {
    const html = this.html();
    // <span>213558</span>
    return html.replace(/<.*>.*<\/.*>/g,'');
}

request('https://www.smzdm.com/youhui/',(err,res) => {
    if(!err) {
        const body = res.body;
        const $ = cheerio.load(body,{
            decodeEntities: false
        })
        $('.list.list_preferential').each(function() {
            const price = $('.itemName .red',this).text().trim();
            // <span></span>
            // <i></i>
            let title = $('.itemName a',this).removeTagText();  //js innerHTML
            const img = $('img',this).attr('src');
            const desc = $('.lrInfo',this).text().trim();
            console.log({
                title,
                price,
                img,
                desc
            })
        })
    }
})
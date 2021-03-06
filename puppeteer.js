const puppeteer = require('puppeteer');
const merge = require('easy-pdf-merge');

var path = 'pdf/'
var root = "https://detfaellesdesignsystem.github.io/dkfds-docs/";
var targetRootDir = "pdf/";
var pdfUrls = ["",
    "design/farver/",
    "design/typography/",
    "design/grid/",
    "design/ikoner/",
    "design/kanter/",
    "design/sideopbygning/",
    "design/visueltdesign/",
    "design/utility/",
    "design/uxprincipper/",
    "komponenter/accordions/",
    "komponenter/badges/",
    "komponenter/beskeder/",
    "komponenter/cards/",
    "komponenter/tabnav/",
    "komponenter/footers/",
    "komponenter/form-controls/",
    "komponenter/headers/",
    "komponenter/buttons/",
    "komponenter/modals/",
    "komponenter/overflowmenu/",
    "komponenter/sidenav/",
    "komponenter/collapse/",
    "komponenter/spinner/",
    "komponenter/search/",
    "komponenter/tables/",
    "komponenter/tags/",
    "komponenter/tooltip/",
    "komponenter/trinindikatorer/",
    "udvidelser/datatables/",
    "udvidelser/selectwoo-multiselect/",
    "udvidelser/pikaday/",
    "omdesignsystemet/",
    "omdesignsystemet/tilpopl/",
    "omdesignsystemet/tiludviklere/",
    "omdesignsystemet/anbefalingerudvikling/",
    "omdesignsystemet/gennemgang/",
    "omdesignsystemet/releases/",
    "privatlivspolitik/"
];

var exampleUrls = [
    {"url": "pages/eksempler/opsummering/opsummering-1/", "filename": "opsummering1"},
    {"url": "pages/eksempler/kvittering/kvittering-1/", "filename": "kvittering1"},
    {"url": "pages/eksempler/kvittering/kvittering-2/", "filename": "kvittering2"}
];


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    var pdfFiles=[];
    var resWidth = 1366; // width of screenshot
    var resHeight = 1000;

    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'networkidle2'});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen');
        await page.evaluate(() => {
            var buttons = document.querySelectorAll('.accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', true);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", false);
            }

            var buttons = document.querySelectorAll('.code-sample .accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', false);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", true);
            }
        });

        if(pdfUrls[i] != "") {
            var filename = pdfUrls[i].replace('/', '-');
            filename = filename.substring(0, filename.length - 1);
        } else{
            filename = "frontpage";
        }
        var pdfFileName = targetRootDir+(i+1)+'-'+filename+'.pdf';

        pdfFiles.push(pdfFileName);
        await page.pdf({path: pdfFileName, format: "A3", printBackground: true, fullPage: true});
    }

    for(var i=0; i<exampleUrls.length; i++){
        await page.goto(root + exampleUrls[i].url, {waitUntil: 'networkidle2'});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen');

        var pdfFileName =  targetRootDir+'screenshots/'+(i+1)+'-'+exampleUrls[i].filename+'.png';

        await page.screenshot({path: pdfFileName, fullPage: true});
    }

    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'networkidle2'});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen');
        await page.evaluate(() => {
            var buttons = document.querySelectorAll('.accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', true);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", false);
            }

            var buttons = document.querySelectorAll('.code-sample .accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', false);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", true);
            }
        });

        var filename = pdfUrls[i];
        if(pdfUrls[i] != "") {
            filename = filename.replace('/', '-');
            filename = filename.substring(0, filename.length - 1);
        } else{
            filename = "frontpage";
        }
        var pdfFileName =  targetRootDir+'screenshots/'+(i+1)+'-'+filename+'.png';

        await page.screenshot({path: pdfFileName, fullPage: true});
    }

    await browser.close();

    //await mergeMultiplePDF(pdfFiles);
})();

const mergeMultiplePDF = (pdfFiles) => {
    return new Promise((resolve, reject) => {
        merge(pdfFiles,'pdf/dkfds-docs.pdf',function(err){

            if(err){
                console.log(err);
                reject(err)
            }

            console.log('Success');
            resolve()
        });
    });
};
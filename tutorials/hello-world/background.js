chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      "target": { "tabId": tab.id },
      "function": showReadme,
    });
  }
});


function showReadme() {

  function urlFind(prodTitle) {
    fetch('https://www.akakce.com/arama/?q=' + prodTitle).then(function (response) {
      // The API call was successful!
      return response.text();
    }).then(function (html) {

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');


      var cat = doc.querySelector('div.rw_v8.search_v8 a:first-child');

      var pids = doc.querySelectorAll('#APL > li[data-pr]');
      // document.querySelector("#datas").innerHTML = cat;
      // var pTitle = doc.querySelectorAll('#APL li a');
      // var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText


      var url = "https://www.akakce.com/j/pl/qv/v3/?p=";
      pids.forEach(function (value) {
        var urlId = value.attributes[0].value;
        //console.log(value)
        url += urlId + ',';
      });

      url = url.slice(0, -1);
      url += "&b=179&0.42535340493533313";
      console.log(url)
      return url
      console.log(cat)





    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
  }
  var url = "https://www.akakce.com/j/pl/qv/v3/?p=18187615,1509853630,78877681,1306324594,16798963,1898548209&b=179&0.42535340493533323"
  fpc(url);
  function fpc(url) {
    fetch(url).then(function (response) {
      // The API call was successful!
      return response.text();
    }).then(function (html) {

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      console.log(doc);

      // Get the image file
      var pAll = doc.querySelectorAll('#APL');
      var prod = [];


      for (let p of pAll) {
        // console.log(p.querySelector('*'))
        var pRow = p.querySelectorAll('li[data-pr]')[0].attributes[0].value;
        // var pCols = p.querySelector('li div');
        var pTitle = p.querySelector('a.iC').attributes.title.value;
        var pPriceAll = p.querySelector("span figure").outerHTML;
        var pPrice = p.querySelector("span > span > span.pb_v8 > span").innerText;
        prod.push(pTitle, pPriceAll, pPrice)
        // console.log(pPriceAll);
        // console.log(pPrice, pTitle);
        //console.log(pRow);
        // console.log(pCols);

      }
      // console.log(prod);



      // document.body.style.backgroundColor = 'red';
      // document.querySelector("#method-setTitle").innerText = "ASDASdwdcw "



      // var cat = doc.querySelector('div.rw_v8.search_v8 a:first-child');
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });



  }



  searchProd = document.querySelector("div.row > div.col-md-6 > h3").innerText


  //
  // console.log(searchProd)
  // console.log("asdasd")


  // console.log(x)
  //urlFind(searchProd)
  //fpc(urlFind(searchProd));

}


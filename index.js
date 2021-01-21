// 1. Get HTML from URL - Node-Fetch to console log HTML from the URL

const fetch = require('node-fetch');
const cheerio = require('cheerio');

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((body) => {
    // 2. Identify the pictures.
    const $ = cheerio.load(body);
    console.log($('img').attr('src'));

    $.html();
  });

// 3. Create a memes folder

// 4. Get an array of picture URLs.
// 5. Identify the 10 first Pic URLs
// 6. Loop over the array for 10 times.
// 7. Download the image information.
// 8. Creat a new file with this image information

// 1. Get HTML from URL - Node-Fetch to console log HTML from the URL

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((html) => {
    // 2. Identify the pictures.
    const $ = cheerio.load(html); // gets the HTML code of the entire website
    console.log($('img').attr('src')); // gets one URL link of the HTML code

    // const url = [$('img').attr('src')];
    // console.log(url);

    const elements = $('img').attr('src');
    console.log(elements);

    //the loop sorts out the first 10 images and downloads them
    for (let i = 0; i < 10; i++) {
      const images = elements[(0, 9)];
      console.log(images);
    }

    $.html();
  });

// 3. Create a memes folder if it doesn't exist yet
const dir = './memes';
try {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
} catch (err) {
  console.error(err);
}

// 4. Get an array of picture URLs.

// 5. Identify the 10 first Pic URLs

// 6. Loop over the array for 10 times.

// 7. Download the image information.

// 8. Creat a new file with this image information

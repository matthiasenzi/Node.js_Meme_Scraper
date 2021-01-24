const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');

// Create a memes folder if it doesn't exist yet

const dir = './memes';
try {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
} catch (err) {
  console.error(err);
}

// Get HTML from URL - Node-Fetch to console log HTML from the URL

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((html) => {
    // Identify all the pictures on the website and gets the HTML code of the entire website.

    const $ = cheerio.load(html);

    const imagesArray = [];
    const finalImagesArray = [];

    // splits and gets the separated URLs of the images.

    $("[href$='.jpg']").each(function () {
      const link = $(this).html().split('"');
      imagesArray.push(link[1]);
    });

    // Loop to sort out the first 10 images and put them into an array.

    for (let i = 0; i < 10; i++) {
      const images = imagesArray[i];
      finalImagesArray.push(images);
    }

    // Loop to download the first 10 images and save them to the new folder 'memes'.

    for (let i = 0; i < 10; i++) {
      const file = fs.createWriteStream(`./memes/memes${i}.jpg`);
      https.get(finalImagesArray[i], function (response) {
        response.pipe(file);
      });
    }

    $.html();

    console.log('Images downloaded');
  });

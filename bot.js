const { Telegraf } = require("telegraf");
const TOKEN = "6488350546:AAE_c3Dcen7cnxLraZOCf5S_7MYEPgEEVoA";
const bot = new Telegraf(TOKEN);


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const web_link = "https://ethiosparemarket.com/product/bmw-test-1/"; 

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();

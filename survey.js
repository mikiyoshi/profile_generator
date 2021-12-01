const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.) ',
  "What's your favourite thing to eat for that meal? ",
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! ',
];
for (let i = 0; i < arr.length; i++) {
  rl.question(arr[i], (answer1) => {
    i++;
    rl.question(arr[i], (answer2) => {
      i++;
      rl.question(arr[i], (answer3) => {
        i++;
        rl.question(arr[i], (answer4) => {
          i++;
          rl.question(arr[i], (answer5) => {
            i++;
            rl.question(arr[i], (answer6) => {
              i++;
              rl.question(arr[i], (answer7) => {
                console.log(
                  `Oh, so your favorite food is ${answer1}, ${answer2}, ${answer3}, ${answer4}, ${answer5}, ${answer6}, ${answer7}`
                );
                rl.close();
              });
            });
          });
        });
      });
    });
  });
}

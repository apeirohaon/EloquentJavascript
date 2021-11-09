const WHITE = ' ';
const BLACK = '#';
let size = 8;

for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    if (i % 2 != 0)
      line += (j % 2 != 0 ? WHITE : BLACK);
    else
      line += (j % 2 == 0 ? WHITE : BLACK);
  }
  console.log(line);
}
let fs = require('fs');
let result = fs.readFileSync("challenge1/info.txt", "utf8");
//console.log(result);

let names = "Jordan, Locke, Marah, Frankie";
/*let newresult = result + names;
fs.writeFileSync("challenge1/info.txt", newresult);

fs.rename('challenge3/binfo.txt', 'challenge3/info.txt', (err) => {
  if (err) throw err;
  //console.log('Rename complete!');
});*/

fs.copyFileSync('challenge4/info.txt', 'challenge4/copyfolder/info.txt');

let challenge5 = fs.readFileSync("challenge5/info.txt", "utf8");

let newText = challenge5.replace(/-/g, ' ');
//console.log(newText);
fs.writeFileSync("challenge5/info.txt", newText);


fs.readdir('challenge6', (err, files) => {
  if (err) {
    console.error(err)
  } else {
   // console.log(files)
    let txtArr = files.filter(file => file.includes('.txt'))
    txtArr.map(file => console.log(fs.readFileSync("challenge6/"+file, "utf8")));
  }
})

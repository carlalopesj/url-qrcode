import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'node:fs';

inquirer.prompt([ {
    name: 'url',
    message: "What's the site url?",
    type: 'input'
}]).then((answers) => {
    const url = answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('code.png'));
    
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
    //qr.image(answers, { type: 'svg' }).pipe((fs.writeFile('qr-code.svg')));
  })
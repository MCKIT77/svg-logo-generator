//requiring file system
const fs = require('fs');
//requireing inquirer
const inquirer = require('inquirer');

const Shape = require('./lib/shapes');

const Circle = require('./lib/circle');

const Square = require('./lib/square');

const Triangle = require('./lib/triangle');




// //EXAMPLE OF SVG 
// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="red" />

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your logo (limit 3 characters):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text (example: red, #FF0000, rgb(255,0,0)):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape from list:',
            choices: ['Square', 'Circle', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color to fill shape (example: red, #FF0000, rgb(255,0,0)):'
        },

    ])
    .then((answers) => {
        let shape = new Shape(answers.shapeColor);

        if (answers.shape === 'Circle') {
            shape = new Circle(answers.shapeColor);
        } else if (answers.shape === 'Square') {
            shape = new Square(answers.shapeColor);
        } else if (answers.shape === 'Triangle') {
            shape = new Triangle(answers.shapeColor);
        }


        fs.writeFile(`./logos/${answers.text.toUpperCase().slice(0, 3)}.svg`, createLogo(answers, shape), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`${answers.text.toUpperCase().slice(0, 3)}.svg file created successfully!`);
            }
        })
    })
    .catch((err) => {
        console.error(err);
    })
function createLogo(answers, shape) {
    if (answers.shape === 'Square') {
        xTextAlign = 100;
        yTextAlign = 110;
    } else if (answers.shape === 'Triangle') {
        xTextAlign = 150;
        yTextAlign = 140;
    } else {
        xTextAlign = 147;
        yTextAlign = 117;
    }

    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
  
    ${shape.render()}
  
    <text x="${xTextAlign}" y="${yTextAlign}" font-size="55" text-anchor="middle" fill="${answers.textColor}">${answers.text.toUpperCase().slice(0, 3)}</text>
  
    </svg>`;
}
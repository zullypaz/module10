const CLI = require("./lib/cli");

new CLI().run();


const filesystem = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) { 
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

    

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }

  
};


const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter 3 characters for the logo:",
  },
  {
    type: "input",
    name: "text-color",
    message: "Choose a color for the text:",
  },
  {
    type: "list",
    name: "shape-logo",
    message: "Choose your shape 1 = Circle, 2 = Square, 3 = Triangle :",
    choices: ["Circle", "Square", "Triangle"],
},
{
  type: "input",
  name: "shape",
  
  message: "Choose a color for your shape",
},
];


function setUpFile(newFile, data) {
console.log("Writing [" + data + "] to file [" + newFile + "]");
filesystem.writeFile(newFile, data, function (err) {
  if (err) {
    return console.log(err); 
  }
  console.log("Success!"); 
});
}
async function letsGo() {
    console.log("testing testing");
    var svgText = "";
 
    var svgFile = "logo.svg"; 
  
    
    const answers = await inquirer.prompt(questions); 
  
    var userChoiceText   = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
      userChoiceText   = answers.text;
    } else {
      
      console.log("Oops. Text should be 1-3 characters long.");
      
      return; 
    } 
    console.log("Text: [" + userChoiceText  + "]");

    userChoiceTextCol = answers["text-color"];
    
    console.log("User font color: [" + userChoiceTextCol + "]"); 
  
    userChoiceShapeCol = answers.shape;
    
    console.log("User shape color: [" + userChoiceShapeCol + "]"); 
  
    userChoiceShape = answers["shape-logo"];
   
    console.log("User entered shape = [" + userChoiceShape + "]");
  
    
    let userShape;
   
    if (userChoiceShape === "Square" || userChoiceShape === "square") {
      userShape = new Square();
      console.log("Big Ol' Square"); 
      
    } else if (userChoiceShape === "Circle" || userChoiceShape === "circle") {
      userShape = new Circle();
      console.log("Big Ol' Circle"); 
      
    } else if (userChoiceShape === "Triangle" || userChoiceShape === "triangle") {
        userShape = new Triangle();
        console.log("Big Ol' Triangle");
      } else {
        
        console.log("Big Ol' Swing and a Miss");
    
      }
      userShape.setColor(userChoiceShapeCol); 

      
  var svg = new Svg();
  svg.setTextElement(userChoiceText , userChoiceTextCol);
  svg.setShapeElement(userShape);
  svgText = svg.render(); 

 
  console.log("New Logo, who dis?:" + svgText);
  console.log("Success!");
  console.log("Writing shape to file...");
  
  setUpFile(svgFile, svgText);
}

letsGo(); 

const SHAPE2 = require("./main2/shape2");

new SHAPE2().run();


const filesystem = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./main2/shape2");

    

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }

  
};


const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter text for the logo:",
  },
  {
    type: "input",
    name: "text-color",
    message: "Please choose a color for the text:",
  },
  {
    type: "list",
    name: "shape-logo",
    message: "Choose your shape a = Circle, b = Square, c = Triangle :",
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

 
    var svgFile = "logo.svg"; 
  
    
    const answers = await inquirer.prompt(questions); 
  
    var userChoiceText   = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
      userChoiceText   = answers.text;
    } else {
      
    
    
    let userShape;
   
   //user shape
	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();
		console.log("User selected Square shape");
	}
	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
		console.log("User selected Circle shape");
	}
	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
		console.log("User selected Triangle shape");
	}
	else {
		console.log("Invalid shape!");
	}
	user_shape.setColor(user_shape_color);

      
  var svg = new Svg();
  svg.setTextElement(userChoiceText , userChoiceTextCol);
  svg.setShapeElement(userShape);
  svgText = svg.render(); 

 
  console.log("New Logo, who dis?:" + svgText);
  console.log("Success!");
  console.log("Writing file...");
  
  setUpFile(svgFile, svgText);
}

letsGo(); 

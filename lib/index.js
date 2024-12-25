const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes");
const filesystem = require("graceful-fs");


class Svg {
    constructor(){
        this.textElement = "";
        this.shapeElement = "";
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape){
        this.shapeElement = shape.render();

    }
    
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter (3) letters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter text color:",
    },
    {
        type: "input",
        name: "shape",
        message: "Enter shape color:",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Enter which shape would you like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];


function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You generated a logo.svg");
    });
}

async function init() {
    console.log("Starting init");
	var svgString = "";
	var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);
	
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		
		user_text = answers.text;
	} else {
		
		console.log("Error. Enter (3) characters");
        return;
	}
	console.log("User text: [" + user_text + "]");
	
	user_font_color = answers ["text-color"];
	console.log("User font color: [" + user_font_color + "]");
	
	user_shape_color = answers.shape;
	console.log("User shape color: [" + user_shape_color + "]");
	
	user_shape_type = answers["pixel-image"];
	console.log("User entered shape = [" + user_shape_type + "]");
	
	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();
		console.log("Square selected");
	}
	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
		console.log("Circle selected");
	}
	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
		console.log("Triangle selected");
	}
	else {
		console.log("Error shape!");
	}
	user_shape.setColor(user_shape_color);

	var svg = new Svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	
	
	console.log("Generating shape:\n\n" + svgString);
	
	console.log("Shape completed!");
	console.log("Generating file...");
	writeToFile(svg_file, svgString); 
}
init()




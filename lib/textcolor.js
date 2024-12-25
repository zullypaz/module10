class SVG {
    constructor() {
      this.textElement = "";

      setText(message, color);
        if (message.length > 3) {
          throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;

      }
    }

    module.exports = SVG;


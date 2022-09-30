const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "checkbox",
        name: "features",
        message: "What features do you want?",
        choices: [{ name: "ESLint", checked: true }, { name: "App" }],
        default: ["ESLint"],
      },
      {
        type: "list",
        name: "eslint",
        message: "Which ESLint config do you want?",
        when: (answers) => answers.features.includes("ESLint"),
        choices: [
          {
            name: "Javascript",
          },
          {
            name: "Typescript",
          },
        ],
      },
      {
        type: "list",
        name: "app",
        message: "Which app flavour do you want?",
        when: (answers) => answers.features.includes("App"),
        choices: [
          {
            name: "simple",
          },
          {
            name: "router",
          },
        ],
      },
    ]);
    if (answers.eslint) {
      this.composeWith(require.resolve("./eslint/simple"));

      if (answers.eslint.includes("Javascript")) {
        this.composeWith(require.resolve("./eslint/javascript"));
      }

      if (answers.eslint.includes("Typescript")) {
        this.composeWith(require.resolve("./eslint/typescript"));
      }
    }

    if (answers.app) {
      if (answers.app === "simple") {
        this.composeWith(require.resolve("./app/simple"));
      } else if (answers.app === "router") {
        this.composeWith(require.resolve("./app/router"));
      }
    }
  }
};

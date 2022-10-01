const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async installDependencies() {
    await this.addDevDependencies(["tailwindcss", "postcss", "autoprefixer"]);
  }

  updateCSS() {
    this.fs.copy(
      this.templatePath("index.css"),
      this.destinationPath("src/index.css")
    );
  }

  postCSSConfig() {
    this.fs.copy(
      this.templatePath("postcss.config.cjs"),
      this.destinationPath("postcss.config.cjs")
    );
  }

  tailwindCSSConfig() {
    this.fs.copy(
      this.templatePath("tailwind.config.cjs"),
      this.destinationPath("tailwind.config.cjs")
    );
  }
};

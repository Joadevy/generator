const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async installDependencies() {
    await this.addDevDependencies(
      [
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "eslint-config-standard",
        "eslint-plugin-import",
        "eslint-plugin-node",
        "eslint-plugin-prettier",
        "eslint-plugin-promise",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-jsx-a11y",
      ]
    )
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }

  env() {
    this.fs.copy(this.templatePath(".env"), this.destinationPath(".env"));
  }
};
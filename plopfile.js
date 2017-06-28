module.exports = plop => {
  plop.addPrompt('directory', require('inquirer-directory'))

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [{
      type: 'input',
      name: 'name',
      validate: value => {
        if ((/.+/).test(value)) { return true; }
        return 'name is required';
      },
      message: 'Component name (dash-case)',
    }, {
      type: 'directory',
      name: 'baseFolder',
      basePath: './',
      message: 'Component directory location',
    }, {
      type: 'confirm',
      name: 'wantPlay',
      message: 'Do you want a vue-play scenario to your component?',
    }],
    actions: [{
      type: 'add',
      path: './{{baseFolder}}/{{dashCase name}}/{{dashCase name}}.vue',
      templateFile: 'templates/component-template.vue',
    }, {
      type: 'add',
      path: './{{baseFolder}}/{{dashCase name}}/play.js',
      templateFile: 'templates/play-template.js',
    }, {
      type: 'add',
      path: './{{baseFolder}}/{{dashCase name}}/index.js',
      templateFile: 'templates/index-template.js',
    }],
  })
}

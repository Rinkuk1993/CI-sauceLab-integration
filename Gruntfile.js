module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine : {
      // Your project's source files
      // src : 'src/**/*.js',
      // Your Jasmine spec files
      specs : 'test/specs/unit/*.js',
      // Your spec helper files
      // helpers : 'specs/helpers/*.js'
    },
    shell: {
      testall: {
        command: './node_modules/.bin/wdio wdio.conf.js'
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-shell-spawn');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
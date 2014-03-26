module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    useminPrepare:{
      html: "index.html",
      options: {
        dest: "build"
      }
    },
    usemin: {
      html:['build/index.html']
    },
    copy: {
      task: {
        src: 'index.html',
        dest: 'build/index.html'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/app.js',
        dest: 'assets/js/app.min.js'
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: 'assets/**/*.sass',
        tasks: ['compass'],
        options: {
          livereload: true,
        },
      },
      scripts: {
        files: ['lib/*.js'],
      },
    }



  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('watch', ['watch']);

  grunt.registerTask('build', [
    'copy:task',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
  ]);

};
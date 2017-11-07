module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
          sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              'style.css': 'styles.sass'
            }
          }
        },
        
        watch: {
        scripts: {
            files: ['*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        }
    },
          browserSync: {
                dev: {
                    bsFiles: {
                        src : [
                            '*.css',
                            '*.html',
                            "*.js"
                        ]
                    },
                    options: {
                        watchTask: true,
                        server: './'
                    }
                }
            }
      });
      // Load the plugins tasks
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');    
      grunt.loadNpmTasks('grunt-browser-sync');
        
      // Default task(s).
      grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
    };
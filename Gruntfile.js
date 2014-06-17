module.exports = function(grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON('../aws-keys.json'),

    's3-sync': {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: 'hackron.org',
      },
      prod: {
        files: [{
          root: 'output-publish',
          src: 'output-publish/**',
          dest: '/'
        }]
      }
    },

    pkg: grunt.file.readJSON('package.json'),

    bower: {
      options: {
        targetDir: 'theme/static/bower_components'
      },
      install: {
      }
    },

    pelican: {
      options: {
        contentDir: 'content',
      },
      build: {
        outputDir: 'output',
        configFile: 'pelicanconf.py',
      },
      publish: {
        outputDir: 'output-publish',
        configFile: 'publishconf.py',
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'bower_components/font-awesome/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'theme/static/css/app.css': 'theme/scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      pelican: {
        files: ['theme/templates/**', 'theme/static/**', 'content/**', 'pelicanconf.py'],
        tasks: ['pelican']
      },

      sass: {
        files: 'theme/scss/**/*.scss',
        tasks: ['sass', 'pelican']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-pelican');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-s3-sync');

  grunt.registerTask('build', ['bower', 'sass', 'pelican:build']);
  grunt.registerTask('default', ['build','watch']);

  grunt.registerTask('publish', ['bower', 'sass', 'pelican:publish', 's3-sync:prod'])
}

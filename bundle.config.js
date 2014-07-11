module.exports = {
  bundle: {
    main: {
      js: [
        './content/js/foo.js',
        './content/js/baz.js'
      ],
      css: [
        './content/**/*.css'
      ],
      resources: './content/**/*.{png,svg}'
    },
    other: {
      js: './content/js/other.js',
      css: '',
      resources: ''
    }
  }
};
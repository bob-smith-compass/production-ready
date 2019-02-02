# Installation

`sudo npm i express`
`sudo npm i -g gulp` 
gulp must also be installed locally. Don't ask me why!
`sudo npm i gulp`

## Gulp

A gulpfile is a file in your project directory titled gulpfile.js (or capitalized as Gulpfile.js, like Makefile), that automatically loads when you run the gulp command. Within this file, you'll often see gulp APIs, like src(), dest(), series(), or parallel() but any vanilla JavaScript or Node modules can be used. Any exported functions will be registered into gulp's task system.
[https://gulpjs.com/](https://gulpjs.com/)
<span style="color: red">
Node's module resolution allows you to replace your gulpfile.js file with a directory named gulpfile.js that contains an index.js file which is treated as a gulpfile.js. This directory could then contain your individual modules for tasks.
</span>

### series()
series()
Combines task functions and/or composed operations into larger operations that will be executed one after another, in sequential order. There are no imposed limits on the nesting depth of composed operations using series() and parallel().
[https://gulpjs.com/docs/en/api/series](https://gulpjs.com/docs/en/api/series)

### parallel()
parallel()
Combines task functions and/or composed operations into larger operations that will be executed simultaneously. There are no imposed limits on the nesting depth of composed operations using series() and parallel().
[https://gulpjs.com/docs/en/api/parallel](https://gulpjs.com/docs/en/api/parallel)



`sudo npm i -D gulp-live-server`

# reload browser
`npm i -D browser-sync`

# React
`sudo npm i -S react`
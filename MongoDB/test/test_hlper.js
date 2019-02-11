const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/liki');

mongoose.connection
.once('open', ()=> {
    console.log(`Connected!`)
})
.on('error', (error)=> {
    console.error(error)
})
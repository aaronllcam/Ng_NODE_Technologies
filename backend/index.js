
const server = require('./server');
const mongoose = require('mongoose');
const { MONGO_URI, PORT} = require('./config');


mongoose.connect(MONGO_URI, {useNewUrlParser: true})
.then( () => {
    server.listen(PORT, () =>{
        console.log(`Backend running on port: ${PORT}`);
    })
})
.catch(console.log);




const config = require('./config/key');
const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        mongoose.connect(config.mongoURL, {
            useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false
          }).then(() => console.log('MongoDB Connected...'))
            .catch(err => console.log(err))
    }

    connect();
    mongoose.connection.on("error", error => {
        console.log("[Error] MongoDB 연결 에러", error);
    })
    mongoose.connection.on("disconnected", () => {
        console.log("[Disconnection] MongoDB 연결이 끊어졌습니다. 연결을 재시도합니다.");
        connect();
    });
   // require('./user');
   // require('./board');
};

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static(__dirname + "/static"));
//create list of users
let list_of_users = []

setInterval(function(){
    io.emit('test', 'test');
},1000);

app.get('/', function (req, res) {
    res.render('index.ejs');
});
io.sockets.on('connection', function (socket) {

    socket.on('username', function (username) {
        //when user connect add him to list
        list_of_users.push(
            {
                id: socket.id,
                name: username,
                balance: 100,
                horse_1: 0,
                horse_2: 0,
                horse_3: 0,
                horse_4: 0
            }
        );
        socket.username = username;
        io.emit('is_online', { user_name: socket.username, all_users: list_of_users });
    });

    socket.on('disconnect', function (username) {
        for (let u of list_of_users) {
            if (u.id == socket.id) {
                list_of_users.pop(u);
            }
        }
        io.emit('is_left', { user_name: socket.username, all_users: list_of_users });
    });

    socket.on('chat_message', function (message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
        
    });
    socket.on('incoming_bet', function (data) {
        for (let u of list_of_users){
            if (u.id == socket.id){
                u[data.selected_horse] += parseInt(data.bet_amount);
                u.balance -= parseInt(data.bet_amount);
            }
        }
        io.emit('change_bet_table', list_of_users);
    });

});
const server = http.listen(8000, function () {
    console.log('listening on port 8000');
});
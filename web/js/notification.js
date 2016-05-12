/**
 * Created by selimreza on 5/12/16.
 */
$( document ).ready(function() {

    var socket = io.connect('http://localhost:8890');

    socket.on('notification', function (data) {

        var message = JSON.parse(data);

        $( "#notifications" ).prepend( "<p><strong>" + message.name + "</strong>: " + message.message + "</p>" );

    });

});
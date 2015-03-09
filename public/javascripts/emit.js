var socket = io();

$('#popupMenu_font a').click(function(e){
    $('#size').text($(e.target).text()).attr("danmaku-size",$(e.target).attr("danmaku-size"));
});

$('#popupMenu_mode a').click(function(e){
    $('#mode').text($(e.target).text()).attr("danmaku-mode",$(e.target).attr("danmaku-mode"));
});

$('#popupMenu_color a').click(function(e){
    $('#color').text($(e.target).text()).attr("danmaku-color",$(e.target).attr("danmaku-color"));
});

$('#btnSend').click(function(e){
    e.preventDefault();
    var danmaku = {
        "mode": Number($("#mode").attr("danmaku-mode")),
        "text": $('#msg').val(),
        "stime":0,
        "size": Number($("#size").attr("danmaku-size")),
        "color":parseInt($("#color").attr("danmaku-color"),16),
        "dur":10000
    };
    var msg=JSON.stringify(danmaku);
    console.log(msg);
    socket.emit('danmaku send',msg);
    $('#msg').val("");
});
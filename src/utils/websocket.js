let websocket, lockReconnect = false;
let createWebSocket = (url, handleEvent) => {
    websocket = new WebSocket(url);
    websocket.onopen = function () {
        heartCheck.reset().start();
    }
    websocket.onerror = function () {
        reconnect(url);
    };
    websocket.onclose = function (e) {
        console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
    }
    websocket.onmessage = function (event) {
        lockReconnect = true;
        handleEvent(event);
    }
}
let reconnect = (url) => {
    if (lockReconnect) return;
    setTimeout(function () {
        createWebSocket(url);
        lockReconnect = false;
    }, 4000);
}
let heartCheck = {
    timeout: 60000,
    timeoutObj: null,
    reset: function () {
        clearInterval(this.timeoutObj);
        return this;
    },
    start: function () {
        this.timeoutObj = setInterval(() => {
            websocket.send("HeartBeat");
        }, this.timeout)
    }
}
let closeWebSocket = () => {
    websocket && websocket.close();
}
export {websocket, createWebSocket, closeWebSocket}
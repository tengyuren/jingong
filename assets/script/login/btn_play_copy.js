
cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    onLoad: function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this);
        
    },
    onTouchStartCallback() {
        url="http://121.36.219.211:8080"
        // url="http://localhost:8080"
        this.node.width=190
        this.node.height=55
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        data='{"mysql":"test"}'
        xhr.send(data);
        
    },
    onTouchEndCallback(){
        console.log("songkai")
        this.node.width=195
        this.node.height=60
    },
    
    start () {

    },

    
});

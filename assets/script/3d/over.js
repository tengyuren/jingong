
cc.Class({
    extends: cc.Component,

    properties: {
        againBtn:{
            default:null,
            type:cc.Node
        },
        scoreLabel:{
            default:null,
            type:cc.Label,
        }
    },

    

    onLoad () {
        this.againBtn.on("touchstart",function(){                
            cc.director.loadScene("3D");
        },this);
        var score = Number(cc.sys.localStorage.getItem("score"));
        this.scoreLabel.string = "最终得分"+score;
        cc.sys.localStorage.setItem("score",0);
    },

    start () {

    },

    // update (dt) {},
});

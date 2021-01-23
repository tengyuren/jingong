
cc.Class({
    extends: cc.Component,

    properties: {
        nextBtn:{
            default:null,
            type:cc.Node
        },
        dialog:{
            default:null,
            type:cc.Label,
        },
        step:1,
        
    },
    dialogChange:function(){
        this.step+=1;
        if(this.step == 2){
            this.dialog.string = "接下来我们一起去了解一下工\n训中心吧！"
        }
        else if(this.step == 3){
            this.dialog.string = "加苏尔真帅！！！"
        }
    },

    onLoad () {
        this.nextBtn.on("touchstart",this.dialogChange,this);
    },

    start () {

    },

    // update (dt) {},
});

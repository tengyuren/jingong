
cc.Class({
    extends: cc.Component,

    properties: {
        round:{
            default:null,
            type:cc.Node,
        },
        nextBtn:{
            default:null,
            type:cc.Node,
        }
    },

    

    onLoad () {
        let touchdown = false;
        this.round.on(cc.Node.EventType.TOUCH_START,(event)=>{
            touchdown = true;
        },this);
        this.round.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{                
            if(!touchdown){
            
                return;
            } 
            // var roundhighlight = cc.instantiate(this.roundHighlight);
            // this.node.addChild(roundhighlight,1,"highlight");
            // roundhighlight.setPosition(380,131.4);

            let delta = event.getDelta();
            this.round.x = this.round.x + delta.x;
            this.round.y = this.round.y + delta.y;
        },this);
        this.round.on(cc.Node.EventType.TOUCH_END,(event)=>{
            touchdown = false;
            if(this.round.x<405 && this.round.x>355 &&this.round.y>106.4&&this.round.y<156.4){
                this.round.x = 380;
                this.round.y = 131.4;
            }else{
                this.round.x = 0;
                this.round.y = -700;
            }
        })
        this.nextBtn.on("touchstart",function(){                
            cc.director.loadScene("3D");
        },this);
        
    },

    start () {

    },

    // update (dt) {},
});

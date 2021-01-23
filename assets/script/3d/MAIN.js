
cc.Class({
    extends: cc.Component,

    properties: {
        playTime:0,
        timeLabe:{
            default:null,
            type:cc.Label
        },
        tipLabe:{
            default:null,
            type:cc.Label
        },
        Abtn:{
            default:null,
            type:cc.Node
        },
        Bbtn:{
            default:null,
            type:cc.Node
        },
        Cbtn:{
            default:null,
            type:cc.Node
        },
        Dbtn:{
            default:null,
            type:cc.Node
        },
        ANSLabel:{
            default:null,
            type:cc.Label
        },
        right:{
            default:null,
            type:cc.Prefab
        },
        wrong:{
            default:null,
            type:cc.Prefab
        },
        overBtn:{
            default:null,
            type:cc.Node
        }
    },

    change:function(){
        this.Abtn.hoverColor = cc.color(255,255,100);
    },

    onLoad () {
        //上一题目编号，从本地数据库获取
        let lastoption = Number(cc.sys.localStorage.getItem("numbers"));
        //当前题目编号
        let option = lastoption+1;
        //当前题目的得分
        var score = 0;
        //获取目前总得分
        var totalScore = Number(cc.sys.localStorage.getItem("score"));
        cc.log(totalScore);


        //答完十道题，题目编号置0，否则存入当前题目编号
        if(option == 10){
            cc.sys.localStorage.setItem("numbers",0);
            //答完十道题，加载结算页面
            cc.director.loadScene("over");
        }else{
            cc.sys.localStorage.setItem("numbers",option);
        }
        cc.log(option);
        //预加载
        cc.director.preloadScene("3D");
        //倒计时
        this.schedule(function(){
            if(this.playTime>0)
                this.playTime--;
            this.timeLabe.string =this.playTime;
            var x=1;    //防止多次加载
            if(this.playTime == 0&&x==1){
                this.tipLabe.string = "时间到！";
                x--;
                //更新分数
                cc.sys.localStorage.setItem("score",totalScore+score);
                //延时加载
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            }
        },1);
        //获取选项内容和正确选项以及题目的内容
        //需要数据库中获取
        var rightAns = 'D';
        var optionA = '齿轮';
        var optionB = '链轮';
        var optionC = '皮带轮';
        var optionD = '凸轮';
        var question = option +"."+"车床变速箱内主轴变速什么实现."
        //设置题目
        this.ANSLabel.string = question;

        //设置选项
        var newOptionA = this.Abtn.getChildByName("Label");
        newOptionA.getComponent(cc.Label).string = optionA;

        var newOptionB = this.Bbtn.getChildByName("Label");
        newOptionB.getComponent(cc.Label).string = optionB;

        var newOptionC = this.Cbtn.getChildByName("Label");
        newOptionC.getComponent(cc.Label).string = optionC;

        var newOptionD = this.Dbtn.getChildByName("Label");
        newOptionD.getComponent(cc.Label).string = optionD;

        //判断对错
        if(rightAns == 'A'){
            this.Abtn.on("touchstart",function(){
                score++;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Bbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;

                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Cbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;

                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Dbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;

                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
        }
        if(rightAns == 'B'){
            this.Abtn.on("touchstart",function(){
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Bbtn.on("touchstart",function(){     
                score++;           
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Cbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Dbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
        }
        if(rightAns == 'C'){
            this.Abtn.on("touchstart",function(){
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Bbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Cbtn.on("touchstart",function(){       
                score++;         
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Dbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
        }
        if(rightAns == 'D'){
            this.Abtn.on("touchstart",function(){
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-30);
                label.getComponent(cc.Label).string = optionA;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Bbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-250);
                label.getComponent(cc.Label).string = optionB;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Cbtn.on("touchstart",function(){                
                var wrongBtn = cc.instantiate(this.wrong);
                var label = wrongBtn.getChildByName("Label");
                this.node.addChild(wrongBtn);
                wrongBtn.setPosition(0,-470);
                label.getComponent(cc.Label).string = optionC;
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
            this.Dbtn.on("touchstart",function(){         
                score++;       
                var rightBtn = cc.instantiate(this.right);
                var label = rightBtn.getChildByName("Label");
                this.node.addChild(rightBtn);
                rightBtn.setPosition(0,-690);
                label.getComponent(cc.Label).string = optionD;

                cc.sys.localStorage.setItem("score",totalScore+score);
                setTimeout(()=>{cc.director.loadScene("3D"); }, 1000);
            },this);
        }
        
        
        //中途退出按钮
        this.overBtn.on("touchstart",function(){
            cc.sys.localStorage.setItem("numbers",0);
            cc.director.loadScene("over");
        },this);
    },

    start () {

    },

    //update (dt) {},
});

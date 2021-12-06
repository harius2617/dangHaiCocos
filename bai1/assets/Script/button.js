// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        isRight: false,
        isLeft: false,
        isJump: false,
        distan:0,
        firstPos: null,
        btnReset: cc.Button,
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button,
    },
    
    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {
        this.firstPos = this.node.position;
    },

    // start () {

    // },

    moveRight () {
        this.isRight = true;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        this.btnLeft.interactable = false;
        cc.log(this.btnJump.interactable)
    },

    moveLeft() {
        this.isLeft = true;
        this.btnJump.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
    },

    jump() {
        this.isJump = true;
        this.btnReset.interactable = false;
        this.btnRight.interactable = false;
        this.btnLeft.interactable = false;
    },

    reset() {
        this.node.position = this.firstPos
       
    },

    resetBtn(){
        this.btnJump.interactable = true;
        this.btnRight.interactable = true;
        this.btnLeft.interactable = true;
        this.btnReset.interactable = true;
    },

    update (dt) {
        if( this.isJump || this.isLeft || this.isRight) {

            this.distan ++
            if(this.isRight) {
                this.node.scaleX = -0.5
                this.node.x += 1;
                if(this.distan == 100) {
                    this.isRight = false;
                    this.distan =0;
                    this.resetBtn();
                }
            }
    
            if(this.isLeft) {
                this.node.scaleX = 0.5
                this.node.x -= 1;
                if(this.distan == 100) {
                    this.isLeft = false;
                    this.distan =0;
                    this.resetBtn();
                }
            }
    
            if(this.isJump) {
                if(this.distan <= 100){
                    this.node.y += 1;
                    if(this.node.y >= 50){
                        this.node.angle += 4.3;
                    }
                }else if(this.distan > 100 && this.distan < 200) {
                    this.node.y -= 1;
                    this.node.angle = 0;
                }else if(this.distan == 200) {
                    this.distan = 0;
                    this.isJump = false;
                    this.resetBtn();
                }
            }
        }
    },
});

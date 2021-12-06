(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/button.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4c4a83B/ixI8LyQursAZmQH', 'button', __filename);
// Script/button.js

"use strict";

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
        distan: 0,
        firstPos: null,
        btnReset: cc.Button,
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.firstPos = this.node.position;
    },


    // start () {

    // },

    moveRight: function moveRight() {
        this.isRight = true;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        this.btnLeft.interactable = false;
        cc.log(this.btnJump.interactable);
    },
    moveLeft: function moveLeft() {
        this.isLeft = true;
        this.btnJump.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
    },
    jump: function jump() {
        this.isJump = true;
        this.btnReset.interactable = false;
        this.btnRight.interactable = false;
        this.btnLeft.interactable = false;
    },
    reset: function reset() {
        this.node.position = this.firstPos;
    },
    resetBtn: function resetBtn() {
        this.btnJump.interactable = true;
        this.btnRight.interactable = true;
        this.btnLeft.interactable = true;
        this.btnReset.interactable = true;
    },
    update: function update(dt) {
        if (this.isJump || this.isLeft || this.isRight) {

            this.distan++;
            if (this.isRight) {
                this.node.scaleX = -0.5;
                this.node.x += 1;
                if (this.distan == 100) {
                    this.isRight = false;
                    this.distan = 0;
                    this.resetBtn();
                }
            }

            if (this.isLeft) {
                this.node.scaleX = 0.5;
                this.node.x -= 1;
                if (this.distan == 100) {
                    this.isLeft = false;
                    this.distan = 0;
                    this.resetBtn();
                }
            }

            if (this.isJump) {
                if (this.distan <= 100) {
                    this.node.y += 1;
                    if (this.node.y >= 50) {
                        this.node.angle += 4.3;
                    }
                } else if (this.distan > 100 && this.distan < 200) {
                    this.node.y -= 1;
                    this.node.angle = 0;
                } else if (this.distan == 200) {
                    this.distan = 0;
                    this.isJump = false;
                    this.resetBtn();
                }
            }
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=button.js.map
        
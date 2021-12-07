"use strict";
cc._RF.push(module, '27fe1Xk7c5Avbn2wbzcc5FU', 'createAcc');
// Script/createAcc.js

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
        tooltipUserName: cc.Label,
        tooltipPw: cc.Label,
        tooltipFullName: cc.Label,
        userNameBox: cc.Node,
        pwBox: cc.Node,
        fullNameBox: cc.Node,
        noti: cc.RichText,
        item: cc.Prefab,
        content: cc.Node
        // _fullName,
    },

    onLoad: function onLoad() {
        this.tooltipUserName.node.active = false;
        this.tooltipPw.node.active = false;
        this.noti.node.active = false;
        this.node.getComponent(cc.Button).interactable = false;
    },
    fullNameCheck: function fullNameCheck() {
        var strFullName = this.fullNameBox.getComponent(cc.EditBox).string;
        if (strFullName.length > 0) {
            this.tooltipFullName.node.active = false;
            return true;
        } else {
            this.tooltipFullName.node.active = true;
            this.tooltipFullName.string = "Enter your name";
        }
    },
    userNameCheck: function userNameCheck() {
        var str = this.userNameBox.getComponent(cc.EditBox);

        if (str.string.length < 6) {
            // userNameInput.getComponent(cc.Label).string = ''
            this.tooltipUserName.node.active = true;
            this.tooltipUserName.string = "User name must have at least 6 letters";
        } else {
            this.tooltipUserName.node.active = false;
            // userNameInput.string = str.string
            return true;
        }
    },
    passwordCheck: function passwordCheck() {
        var strPw = this.pwBox.getComponent(cc.EditBox).string;
        if (strPw.match(/[0-9]/gm) && strPw.match(/[A-Z]/gm) && strPw.length >= 8) {
            this.tooltipPw.node.active = false;
            this.node.getComponent(cc.Button).interactable = true;
            return true;
        } else {
            this.tooltipPw.node.active = true;
            this.tooltipPw.string = "Passwords must have at least 8 letters and \ncontain at least one uppercase letters and one numbers.";
        }
    },
    hideToolTip: function hideToolTip() {
        if (this.userNameBox.getComponent(cc.EditBox).string.length === 0) {
            this.tooltipUserName.node.active = false;
        }
        if (this.pwBox.getComponent(cc.EditBox).string.length === 0) {
            this.tooltipPw.node.active = false;
        }
    },
    showNoti: function showNoti() {
        var name = this.userNameBox.getComponent(cc.EditBox).string;
        var str = "<color=#0fffff>Ch\xFAc m\u1EEBng </c><color=#00ff00>" + name + "</c><color=#0fffff> \u0111\xE3 \u0111\u0103ng k\xFD th\xE0nh c\xF4ng</color>";
        this.noti.string = str;
        this.noti.node.active = true;
    },
    sigUpBtn: function sigUpBtn() {
        if (this.userNameCheck() && this.passwordCheck() && this.fullNameCheck()) {
            this.showNoti();
            var userNameInput = cc.instantiate(this.item);
            this.content.addChild(userNameInput);
            userNameInput.getComponent(cc.Label).string = "User name: " + this.userNameBox.getComponent(cc.EditBox).string;
        }
    }
});

cc._RF.pop();
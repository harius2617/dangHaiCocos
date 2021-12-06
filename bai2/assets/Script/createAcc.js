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
        tooltip: cc.Label,
        noti: cc.RichText,
        btnSignUp: cc.Button,

        userName: null,
        // _fullName,
    },

    onLoad(){
        this.tooltip.node.active = false;
        this.noti.node.active = false;
        // this.btnSignUp.interactable = false;
    },
    
    
    userNameCheck(){
        this.userName = this.node.getComponent(cc.EditBox).string;
        cc.log(this.userName.length)
        if(this.userName.length < 6) {
            this.tooltip.node.active = true;
            this.tooltip.string = "User name must have at least 6 letters";
        }else{
            this.tooltip.node.active = false;
            return true;
        }
    },
        
    passwordCheck(){
        if(this.node.getComponent(cc.EditBox).string.match(/[0-9]/gm) && this.node.getComponent(cc.EditBox).string.match(/[A-Z]/gm)){
            this.tooltip.node.active = false;
            // this.btnSignUp.interactable = true;
            return true;
        } else {
            this.tooltip.node.active = true;
            this.tooltip.string = "Passwords must contain at least one uppercase letters and one numbers."
        }
    },

    sigUpBtn() {
        if(this.userNameCheck() && this.passwordCheck()){
            this.noti.node.active = true;
        }
    },

});

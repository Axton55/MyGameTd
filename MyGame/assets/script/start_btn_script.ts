// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    transferToMainScene(){
        cc.director.loadScene("main_scene", ()=>{
            cc.log("New main scene has been loaded!!!");
        })
    }

    onClick(event, args){
        cc.log(args, event)
    }
}

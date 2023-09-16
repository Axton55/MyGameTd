// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    factor:number = 64

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            cc.log("TOUCH_MOVE")
            var delta = event.touch.getDelta()
            this.x += delta.x
            this.y += delta.y
        }, this.node)

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            cc.log("TOUCH_END")
            let mouse_pos = event.getLocation()
            cc.log(mouse_pos.x, mouse_pos.y)
            /** row 1 **/
            if ((mouse_pos.x < 128 && mouse_pos.x > 64) && (mouse_pos.y > 448 && mouse_pos.y < 512)) {
                this.x = 96 + this.factor * 0
                this.y = 480 + this.factor * 0
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 1 && mouse_pos.x > 64 + this.factor * 1) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 1
                this.y = 480 + this.factor * 1
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 2 && mouse_pos.x > 64 + this.factor * 2) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 2
                this.y = 480 + this.factor * 2
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 3 && mouse_pos.x > 64 + this.factor * 3) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 3
                this.y = 480 + this.factor * 3
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 4 && mouse_pos.x > 64 + this.factor * 4) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 4
                this.y = 480 + this.factor * 4
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 5 && mouse_pos.x > 64 + this.factor * 5) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 5
                this.y = 480 + this.factor * 5
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 6 && mouse_pos.x > 64 + this.factor * 6) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 6
                this.y = 480 + this.factor * 6
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 128 + this.factor * 7 && mouse_pos.x > 64 + this.factor * 7) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 96 + this.factor * 7
                this.y = 480 + this.factor * 7
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            }
            /** row 2 **/
            /** row 3 **/
            /** row 4 **/
            /** row 5 **/
            /** row 6 **/
            /** other area **/
            else {
                this.x = 160
                this.y = 605
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            }
        }, this.node)
    }

    start() {

    }

    // update (dt) {}
}


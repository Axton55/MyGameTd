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
                this.x = 96
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 192 && mouse_pos.x > 128) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 160
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 256 && mouse_pos.x > 192) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 224
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 320 && mouse_pos.x > 256) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 288
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 384 && mouse_pos.x > 320) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 352
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 448 && mouse_pos.x > 384) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 416
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 512 && mouse_pos.x > 448) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 480
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 576 && mouse_pos.x > 512) && (mouse_pos.y > 448 && mouse_pos.y < 512)){
                this.x = 544
                this.y = 480
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            }
            /** row 2 **/
            else if ((mouse_pos.x < 128 && mouse_pos.x > 64) && (mouse_pos.y > 384 && mouse_pos.y < 448)) {
                this.x = 96
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 192 && mouse_pos.x > 128) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 160
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 256 && mouse_pos.x > 192) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 224
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 320 && mouse_pos.x > 256) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 288
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 384 && mouse_pos.x > 320) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 352
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 448 && mouse_pos.x > 384) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 416
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 512 && mouse_pos.x > 448) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 480
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 576 && mouse_pos.x > 512) && (mouse_pos.y > 384 && mouse_pos.y < 448)){
                this.x = 544
                this.y = 416
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            }
            /** row 3 **/
            else if ((mouse_pos.x < 128 && mouse_pos.x > 64) && (mouse_pos.y > 320 && mouse_pos.y < 384)) {
                this.x = 96
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 192 && mouse_pos.x > 128) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 160
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 256 && mouse_pos.x > 192) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 224
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 320 && mouse_pos.x > 256) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 288
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 384 && mouse_pos.x > 320) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 352
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 448 && mouse_pos.x > 384) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 416
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 512 && mouse_pos.x > 448) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 480
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            } else if((mouse_pos.x < 576 && mouse_pos.x > 512) && (mouse_pos.y > 320 && mouse_pos.y < 384)){
                this.x = 544
                this.y = 352
                cc.log("this.x: " + this.x)
                cc.log("this.y: " + this.y)
            }
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


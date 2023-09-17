// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AnimationClip)
    anim: cc.AnimationClip = null!
    
    factor: number = 64

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
            let delta = event.touch.getDelta()

            this.x += delta.x
            this.y += delta.y
        }, this.node)

        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
            let mouse_pos = event.getLocation()
            // if ((mouse_pos.x < 128 && mouse_pos.x > 64) && (mouse_pos.y > 448 && mouse_pos.y < 512)) {
            //     this.x = 96
            //     this.y = 480
            // } else {
            //     this.x = 160
            //     this.y = 610
            // }
            
        
            for (let x = 1; x <= 8; x++) {
                for (let y = 2; y <= 7; y++) {
                    if ((mouse_pos.x < 64 * (x + 1) && mouse_pos.x > 64 * x) && (mouse_pos.y < 64 * (y + 1) && mouse_pos.y > 64 * y)) {
                        this.x = 64 * (x + 0.5)
                        this.y = 64 * (y + 0.5)
                    } else {
                        this.x = 160
                        this.y = 605
                    }
                }
            }
        }, this.node)
    }

    start () {

    }

    update (dt) {
    }
}

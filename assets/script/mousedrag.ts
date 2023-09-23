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

    @property(cc.Prefab)
    bulletPrefab: cc.Prefab = null!
    
    reload = 0.5
    placedDown = false

    // factor: number = 64

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.touchHandler()
        this.schedule(() => {
                this.shoot()
        }, this.reload)
    }

    start () {

    }

    touchHandler() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
            let delta = event.touch.getDelta()

            this.x += delta.x
            this.y += delta.y
        }, this.node)

        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
            let mouse_pos = event.getLocation()
            let done = false

            for (let x = 1; x <= 8; x++) {
                for (let y = 2; y <= 7; y++) {
                    if ((mouse_pos.x < 64 * (x + 1) && mouse_pos.x > 64 * x) && (mouse_pos.y < 64 * (y + 1) && mouse_pos.y > 64 * y)) {
                        this.x = 64 * (x + 0.5)
                        this.y = 64 * (y + 0.5)

                        done = true
                        break
                    }
                }
            }

            if (!done) {
                this.x = 160
                this.y = 610
            }
        }, this.node)
    }

    shoot() {
        cc.resources.load("", cc.AudioClip, (error, clip: cc.AudioClip) => {
            cc.audioEngine.playEffect(clip, false)
        })
        
        let bullet = cc.instantiate(this.bulletPrefab)

        bullet.x = this.node.x + this.node.width / 2
        bullet.y = this.node.y

        bullet.setParent(cc.director.getScene())
    }

    update (dt) {
    }
}

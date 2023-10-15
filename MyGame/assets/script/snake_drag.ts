// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AnimationClip)
    anim: cc.AnimationClip = null!

    @property(cc.Prefab)
    bulletSnakePre: cc.Prefab = null!

    @property(cc.Prefab)
    bulletBatPre: cc.Prefab = null!

    @property(cc.Prefab)
    bulletBeePre: cc.Prefab = null!

    @property(cc.Prefab)
    bulletFishPre: cc.Prefab = null!

    @property(cc.Prefab)
    bulletMousePre: cc.Prefab = null!

    // reload: number = 0.5
    snake_reload:number = 1.5
    bat_reload:number = 1.0
    bee_reload:number = 2.0
    fish_reload:number = 0.5
    mouse_reload:number = 3.0

    factor: number = 64

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.touchHandler()
        if(this.bulletSnakePre!=null){
            this.schedule(this.shoot, this.snake_reload);
        } else if(this.bulletBatPre!=null){
            this.schedule(this.shoot, this.bat_reload);
        } else if(this.bulletBeePre!=null){
            this.schedule(this.shoot, this.bee_reload);
        } else if(this.bulletFishPre!=null){
            this.schedule(this.shoot, this.fish_reload);
        } else if(this.bulletMousePre!=null){
            this.schedule(this.shoot, this.mouse_reload);
        }
        
    }

    start() {

    }

    update(dt) {

    }

    /**
     * Handle the touch event
     */
    touchHandler() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            let delta = event.touch.getDelta()
            this.x += delta.x
            this.y += delta.y
        }, this.node)

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            let mouse_pos = event.getLocation()
            cc.log("mouse_pos: " + mouse_pos)
            let done = false
            for (let x = 1; x <= 8; x++) {
                for (let y = 2; y <= 7; y++) {
                    if ((mouse_pos.x < 64 * (x + 1) && mouse_pos.x > 64 * x) && (mouse_pos.y < 64 * (y + 1) && mouse_pos.y > 64 * y)) {
                        this.x = 64 * (x + 0.5)
                        this.y = 64 * (y + 0.5)
                        done = true
                        break;
                    }
                    // else {
                    //     this.x = 160
                    //     this.y = 605
                    //     cc.log("else this.x: " + this.x)
                    //     cc.log("else this.y: " + this.y)
                    // }
                }
            }

            if (!done) {
                this.x = 160
                this.y = 605
            }
        }, this.node)
    }

    // shooting function
    shoot() {
        // cc.resources.load("C:\\Users\\Administrator\\Music\\Audio\\laser.mp3", cc.AudioClip, (error, clip:cc.AudioClip) =>{
        //     cc.audioEngine.playEffect(clip, false)
        // })

        // snake bullet
        if (this.bulletSnakePre != null) {
            let bullet = cc.instantiate(this.bulletSnakePre)
            bullet.x = this.node.x + this.node.width / 2;
            bullet.y = this.node.y;
            bullet.setParent(cc.director.getScene())
        }

        // bat bullet
        if (this.bulletBatPre != null) {
            let bullet = cc.instantiate(this.bulletBatPre)
            bullet.x = this.node.x + this.node.width / 2;
            bullet.y = this.node.y;
            bullet.setParent(cc.director.getScene())
        }

        // bee bullet
        if (this.bulletBeePre != null) {
            let bullet = cc.instantiate(this.bulletBeePre)
            bullet.x = this.node.x + this.node.width / 2;
            bullet.y = this.node.y;
            bullet.setParent(cc.director.getScene())
        }

        // fish bullet
        if (this.bulletFishPre != null) {
            let bullet = cc.instantiate(this.bulletFishPre)
            bullet.x = this.node.x + this.node.width / 2;
            bullet.y = this.node.y;
            bullet.setParent(cc.director.getScene())
        }

        // mouse bullet
        if (this.bulletMousePre != null) {
            let bullet = cc.instantiate(this.bulletMousePre)
            bullet.x = this.node.x + this.node.width / 2;
            bullet.y = this.node.y;
            bullet.setParent(cc.director.getScene())
        }
    }
}

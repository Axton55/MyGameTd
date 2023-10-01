const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyBeige extends cc.Component {


    scrWidth: number
    scrHeigh: number

    @property
    speed: number = 50

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let cm = cc.director.getCollisionManager()
        cm.enabled = true
        // cm.enabledDebugDraw = true

        this.scrWidth = cc.view.getCanvasSize().width
        this.scrHeigh = cc.view.getCanvasSize().height
    }

    start() {
        this.node.x = this.scrWidth + this.node.width
        this.node.y = (Math.trunc((Math.random() * 10) % 6) + 2) * 64 + 32
        cc.log("this.node.y: " + this.node.y)
    }

    update(dt) {
        this.node.x -= this.speed * dt
        if (this.node.x - this.node.width / 2 < 0) {
            this.node.removeFromParent(true)
            this.destroy()
        }
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider){
        if(other.tag == 0){
            this.node.removeFromParent(true)
            this.destroy()
            other.node.removeFromParent(true)
            other.destroy()
        }
    }
}

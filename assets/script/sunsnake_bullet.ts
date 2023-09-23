const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    screen_width: number = null!
    screen_height: number = null!

    @property
    speed: number = 200

    // biweekly reminder that rick has 400 iq

    onLoad () {
        this.screen_width = cc.view.getCanvasSize().width
        this.screen_height = cc.view.getCanvasSize().height
    }

    start () {
        
    }

    update (dt) {
        this.node.x += this.speed * dt
        if (this.node.x + this.node.width > this.screen_width) {
            this.node.destroy() // i like banana
        }
    }
}

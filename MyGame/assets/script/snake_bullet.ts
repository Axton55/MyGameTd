const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    screen_width :number
    screen_height:number

    @property
    speed:number = 200

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // get canvas width
        this.screen_width = cc.view.getCanvasSize().width
    }

    start () {

    }

    update (dt) {
        this.node.x += this.speed * dt
        if(this.node.x + this.node.width > this.screen_width){
            this.node.removeFromParent(true)
            this.destroy()
        }
    }
}

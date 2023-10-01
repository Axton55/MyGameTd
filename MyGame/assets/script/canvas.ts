const {ccclass, property} = cc._decorator;

@ccclass
export default class Canvas extends cc.Component {

    @property(cc.Prefab)
    enemyPre:cc.Prefab = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.schedule(()=>{
            let enemy = cc.instantiate(this.enemyPre)
            enemy.setParent(cc.director.getScene())
        }, 3)
        
    }

    // update (dt) {}
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class Canvas extends cc.Component {

    @property(cc.Prefab)
    enemyPinkPre: cc.Prefab = null
    @property(cc.Prefab)
    enemyBeigePre: cc.Prefab = null
    @property(cc.Prefab)
    enemyGreenPre: cc.Prefab = null
    @property(cc.Prefab)
    enemyBluePre: cc.Prefab = null
    @property(cc.Prefab)
    enemyYellowPre: cc.Prefab = null

    // score of the game    
    score: number = 0

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.schedule(() => {
            let count = Math.trunc(Math.random() * 10 % 5)
            cc.log("count: " + count)
            // test
            count = 0
            
            switch (count) {
                case 0:
                    let enemyPink = cc.instantiate(this.enemyPinkPre)
                    enemyPink.setParent(cc.director.getScene())
                    break;
                case 1:
                    let enemyBeige = cc.instantiate(this.enemyBeigePre)
                    enemyBeige.setParent(cc.director.getScene())
                    break;
                case 2:
                    let enemyGreen = cc.instantiate(this.enemyGreenPre)
                    enemyGreen.setParent(cc.director.getScene())
                    break;
                case 3:
                    let enemyBlue = cc.instantiate(this.enemyBluePre)
                    enemyBlue.setParent(cc.director.getScene())
                    break;
                case 4:
                    let enemyYellow = cc.instantiate(this.enemyYellowPre)
                    enemyYellow.setParent(cc.director.getScene())
                    break;
            }
        }, 3)

    }

    // update (dt) {}
}

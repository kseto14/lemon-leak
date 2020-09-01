sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . . . . . . . . . 
        . . f f e e e e f 2 f . . . . . . . . . . . . . 
        . f f e e e e f 2 2 2 f . . . . . . . . . . . . 
        . f e e e f f e e e e f . . . c c . . . . . . . 
        . f f f f e e 2 2 2 2 e f . c d c . . . . . . . 
        . f e 2 2 2 f f f f e 2 f c d d c . . . . . . . 
        f f f f f f f e e e f f c d d c . . . . . . . . 
        f f e 4 4 e b f 4 4 e c d d c . . . . . . . . . 
        f e e 4 d 4 1 f d d e c d c . . . . . . . . . . 
        . f e e e 4 d d d e d c c c . . . . . . . . . . 
        . . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
        . . . f 2 2 2 2 4 4 e e . . . . . . . . . . . . 
        . . . f 2 2 2 2 e 2 f . . . . . . . . . . . . . 
        . . . f 4 4 4 4 5 5 f . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})

input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(Points)
})
input.onButtonPressed(Button.AB, function () {
    while (!(input.pinIsPressed(TouchPin.P0))) {
        for (let index = 0; index < 4; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(1000)
            for (let index = 0; index < 4; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(1000)
                if (sprite.isTouching(Catch)) {
                    Points += 1
                    Catch.delete()
                } else if (Points == 50) {
                    basic.showString("YOU WIN ")
                    control.reset()
                }
            }
            Catch.delete()
        }
        for (let index = 0; index < 6; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
            for (let index = 0; index < 6; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
                if (sprite.isTouching(Catch)) {
                    Points += 1
                    Catch.delete()
                } else if (Points == 50) {
                    basic.showString("YOU WIN ")
                    control.reset()
                }
            }
            Catch.delete()
        }
        for (let index = 0; index < 8; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(200)
            for (let index = 0; index < 8; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(200)
                if (sprite.isTouching(Catch)) {
                    Points += 1
                    Catch.delete()
                } else if (Points == 50) {
                    basic.showString("YOU WIN ")
                    control.reset()
                }
                Catch.delete()
            }
        }
        for (let index = 0; index < 10; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(150)
            for (let index = 0; index < 10; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(150)
                if (sprite.isTouching(Catch)) {
                    Points += 1
                    Catch.delete()
                } else if (Points == 50) {
                    basic.showString("YOU WIN ")
                    control.reset()
                }
            }
            Catch.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let Catch: game.LedSprite = null
let Points = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)

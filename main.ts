input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (Fome))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Se atirou da torre eifel..")
    music.play(music.stringPlayable("A A G F E D C C ", 120), music.PlaybackMode.UntilDone)
    basic.showString("" + (Idade))
    Idade = 0
    Fome = 6
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(randint(0, 6))
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        # . . . .
        . # # # .
        . . . . #
        `)
    Fome += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Silly)
    music.play(music.stringPlayable("C5 C B D A E G F ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(input.temperature())
})
input.onPinPressed(TouchPin.P1, function () {
    Mão = randint(0, 3)
    if (Mão == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Mão == 2) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            . # # # .
            # # # . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            `)
    }
})
let Mão = 0
let Idade = 0
let Fome = 0
basic.showIcon(IconNames.Asleep)
loops.everyInterval(1000, function () {
    Idade += 1
})
loops.everyInterval(6, function () {
    Fome += -1
})
basic.forever(function () {
    if (Fome == 14) {
        basic.showString("Enfardar não é solução")
        music.play(music.stringPlayable("A C5 B C5 A C5 B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showString("" + (Idade))
        Idade = 0
        Fome = 6
    }
})
basic.forever(function () {
    if (Fome == 0) {
        basic.showString("Para a próxima alimenta-o")
        music.play(music.stringPlayable("A A G F E D C C ", 120), music.PlaybackMode.UntilDone)
        basic.showString("" + (Idade))
        Idade = 0
        Fome = 6
    }
})
basic.forever(function () {
    if (Idade == 100) {
        basic.showString("Seu velhote...")
        music.play(music.stringPlayable("A A G F E D C C ", 120), music.PlaybackMode.UntilDone)
        basic.showString("" + (Idade))
        Idade = 0
        Fome = 6
    }
})

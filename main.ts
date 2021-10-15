let Départ = 0
let Temps_écoulé = 0
input.onButtonPressed(Button.A, function () {
    Départ = 0
    Départ = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    Temps_écoulé = input.runningTime() - Départ
    basic.showNumber(Math.idiv(Temps_écoulé, 1000))
})

input.onGesture(Gesture.Shake, function () {
    number = number + 1
})
let number = 0
number = 0
basic.forever(function () {
    basic.showNumber(number)
})

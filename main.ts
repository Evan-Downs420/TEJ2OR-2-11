/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Mar 2026
 * This program makes 2 random integers from 0-99
*/

let first_number = 0
let second_number = 0

// Generate random integers on start
first_number = randint(0, 99)
second_number = randint(0, 99)

input.onButtonPressed(Button.A, function () {
    basic.showNumber(first_number)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(second_number)
    basic.clearScreen()
})

input.onGesture(Gesture.Shake, function () {
    if (first_number < second_number) {
        // If first is 10 and second is 20, shows "10 < 20"
        basic.showString(first_number + " < " + second_number)
    } else {
        // If first is 50 and second is 5, shows "50 > 5"
        basic.showString(first_number + " > " + second_number)
    }
})

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Mar 2026
 * This program will make 2 random numbers through 0-99 and will see which one is bigger
*/

// variable
const numberFirst: number = randint(0,99)
const numberSecond: number = randint(0,99)

// Press a
input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  basic.showString("#1:")
  basic.showNumber(numberFirst)
})

// Press b
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2:")
    basic.showNumber(numberSecond)
})

// shake
input.onGesture(Gesture.Shake, function(){
 
  if (numberFirst > numberSecond) {
      basic.showNumber(numberFirst)
      basic.showString(">")
      basic.showNumber(numberSecond)
      basic.showIcon(IconNames.Happy)
  } else {
      basic.showNumber(numberFirst)
      basic.showString("<")
      basic.showNumber(numberSecond)
      basic.showIcon(IconNames.Sad)
  }     
})

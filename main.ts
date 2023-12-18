game.splash("Let's calculate the area of a trapizoid")
let Base1 = game.askForNumber("What is Base1 (cm)?")
let Base2 = game.askForNumber("What is Base2 (cm)?")
let Height = game.askForNumber("What is hight (cm)?")
let Area = (Base1 + Base2) / 2 * Height
game.splash("The area of the trapizoid with Base1" + Base1 + "Cm and Base2" + Base2 + "Cm is" + Area + "Cm^2")

enum RadioMessage {
    stop_right = 5365,
    forward = 16348,
    backward = 28651,
    turn_left = 34092,
    turn_right = 37526,
    stable = 14175,
    left = 14947,
    right = 32391,
    message1 = 49434,
    stop_left = 35459
}
radio.onReceivedMessage(RadioMessage.backward, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    -255
    )
})
radio.onReceivedMessage(RadioMessage.stable, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0,
    SuperBit.enMotors.M3,
    0
    )
})
radio.onReceivedMessage(RadioMessage.turn_left, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    -255
    )
})
radio.onReceivedMessage(RadioMessage.stop_right, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
})
radio.onReceivedMessage(RadioMessage.turn_right, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    255
    )
})
radio.onReceivedMessage(RadioMessage.left, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
})
radio.onReceivedMessage(RadioMessage.forward, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    255
    )
})
radio.onReceivedMessage(RadioMessage.right, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
})
radio.onReceivedMessage(RadioMessage.stop_left, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M4, 0)
})
radio.setGroup(88)

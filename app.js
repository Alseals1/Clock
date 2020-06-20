// function setDate() {
//     const now = new Date()
//     const seconds = now.getSeconds()
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     // console.log(`${seconds} seconds`)
//     const secondHand = document.querySelector('.second-hand')
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`


//     const min = now.getMinutes()
//     const minDegrees = ((min / 60) * 360) + 90
//     const minHand = document.querySelector('.min-hand')
//     minHand.style.transform = `rotate(${minDegrees}deg)`
//     // console.log(`${min} minutes`)



//     const hour = now.getHours()
//     const hourDegrees = ((hour / 60) * 360) + 90
//     const hourHand = document.querySelector('.hand-hour')
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`
//     // console.log(`${hour} hour`)
//     console.log(now)

// }
// // setDate()
// setInterval(setDate, 1000)
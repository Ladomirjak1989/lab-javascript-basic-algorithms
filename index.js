// Iteration 1: Names and Input
const hacker1 = 'Bettina';
const hacker2 = 'Albert';
let reversed = ''
let separated = ''
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}
else {
    console.log(`Wow, you both have equally long names, ${Albert} characters!`)
}

for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        separated += hacker1[i].toUpperCase()
    }
    else {
        separated += `${hacker1[i].toUpperCase()} `
    }

}


console.log(separated)
for (let i = hacker1.length - 1; i >= 0; i--) {
    reversed += hacker1[i]
}
console.log(reversed)

for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log('The drivers name goes first.')
        break

    }
    else if (hacker1[i] > hacker2[i]) {
        console.log('Yo, the navigator goes first, definitely.')
        break
    }
    else {
        console.log(`What?! You both have the same name?`)
    }
}
if (hacker1 < hacker2) {
    console.log('The drivers name goes first.')


}
else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first, definitely.')

}
else {
    console.log(`What?! You both have the same name?`)
}

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit ante vitae turpis scelerisque maximus. Sed at finibus lorem. In a suscipit metus. Vivamus turpis purus, euismod eu ex non, porta vulputate lectus. Proin a nunc ac mi elementum commodo ac eget augue. Etiam viverra justo vitae risus vestibulum, et dapibus quam semper. Proin nulla nulla, molestie ut nibh at, pulvinar tincidunt mi. Duis ornare velit ligula, non finibus nunc eleifend nec.\nNam egestas urna lacus, feugiat vestibulum metus ullamcorper vel.Mauris mi massa, aliquam sit amet posuere ut, facilisis sed lectus.Maecenas tempor fringilla quam et egestas.Nulla finibus risus a egestas elementum.Donec eget nisl mi.Phasellus imperdiet tincidunt ipsum et vulputate.Donec nibh elit, congue nec felis vel, gravida bibendum magna.Quisque sit amet sem vel arcu consectetur pharetra vel a tellus.Nam laoreet ipsum ut pretium pellentesque.Aliquam nec elit et risus faucibus mattis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed ut ante elementum, hendrerit dolor eget, ornare erat. Curabitur ex justo, fringilla sit amet felis vitae, pharetra cursus nulla.Phasellus eu quam sit amet enim consectetur elementum et tristique ligula.Proin a magna eget dolor lobortis accumsan eu non eros.Donec justo sapien, rhoncus a congue scelerisque, gravida congue arcu.Etiam porta nunc sed velit interdum pulvinar.Suspendisse pharetra faucibus ornare.Cras sodales magna a orci dapibus sagittis.'

let count = 0
let latinCaunt = 0
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        count += 1

    }
}
console.log(count)
let index = longText.indexOf('Lorem')
while (index !== -1) {
    ++latinCaunt
    index = longText.indexOf('Lorem', index += 1)
}
console.log(latinCaunt)


const text1 = 'A man, a plan, a canal, Panama!'
const text2 = 'Amor, Roma'
const text3 = 'stack cats'

let cleantext = ''
for (let i = 0; i < text1; i++) {
    let shar = text[i].toLowerCase()
    if (shar >= 'a' && shar <= 'z') {
        cleantext += shar
    }
}
let isPolindrom = true
for (let i = 0; i <= cleantext.length / 2; i++) {
    if (cleantext[i] !== cleantext[cleantext.length - 1 - i]) {
        isPolindrom = false
        break

    }
}
console.log(isPolindrom)

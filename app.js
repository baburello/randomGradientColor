const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

// radom color function

function getGradient() {
    let color = '#'
    for (let i = 0; i < 6; i++){
        const randomNumber = Math.trunc(Math.random() * values.length)
        color += values[randomNumber]
    }
    return color
}

const color1 = getGradient()
const color2 = getGradient()

console.log(color1, color2)

//set color to body
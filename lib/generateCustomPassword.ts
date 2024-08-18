export const generateCustomPassword = (length: number, mayus: boolean, minus: boolean, numbers: boolean, specialCharacters: boolean) => {
    const mayusCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const minusCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const numberCharacters = '0123456789'
    const specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    let characters = ''
    let password = ''
    if(mayus) characters += mayusCharacters
    if(minus) characters += minusCharacters
    if(numbers) characters += numberCharacters
    if(specialChar) characters += specialChar

    if(mayus) password += mayusCharacters.charAt(Math.floor(Math.random() * mayusCharacters.length))
    if(minus) password += minusCharacters.charAt(Math.floor(Math.random() * minusCharacters.length))
    if(numbers) password += numberCharacters.charAt(Math.floor(Math.random() * numberCharacters.length))
    if(specialCharacters) password += specialChar.charAt(Math.floor(Math.random() * specialChar.length))

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('')

    return password
}
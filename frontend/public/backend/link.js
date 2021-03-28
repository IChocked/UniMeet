import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters
} from '../../src/characters.js'

// Creates Entire Link
function handleLink() {
  let characterList = ''

  characterList += upperCaseLetters

  characterList += lowerCaseLetters

  characterList += numbers

  const sublink = createLink(characterList)

  let template = 'talky.io/' + sublink
  return template
}

// Generate Sublink
function createLink(characterList) {
  let password = ''
  const characterListLength = characterList.length

  for (let i = 0; i < 6; i++) {
    const characterIndex = Math.round(Math.random() * characterListLength)
    password = password + characterList.charAt(characterIndex)
  }
  return password
}

/***
 * search (grid, wordlist)
 * This function accepts a grid (a 2d array of letters)
 * and a wordlist (an array of words to search for). The function finds any words
 * that exist in the word search in any of the 8 possible directions (up, down, left, right
 * and all 4 diagonal directions). This function is case-insensitive in its matching.
 *
 * Returns: an array of words that can be found in the word search
 ***/

// the grid: [ [ 'E', 'V', 'O', 'L', 'A' ],
//             [ 'G', 'H', 'D', 'I', 'P' ],
//             [ 'T', 'N', 'E', 'O', 'C' ],
//             [ 'O', 'H', 'I', 'N', 'L' ],
//             [ 'L', 'I', 'E', 'K', 'S' ] ]

// wordlist: [ 'the', 'lion', 'king', 'can', 'you', 'feel', 'the', 'love' ]

module.exports = function search (grid, wordlist) {
    // Get the current word
    for(let word = 0; word < wordlist.length; word ++){
        let currentWord = wordlist[word].toLowerCase().split('')
        // Get the current character
        for(let row = 0; row < grid.length; row ++ ){
            for(let col = 0; col < grid[row].length; col ++){
                let currentChar = grid[row][col].toLowerCase()
                // Check to see if the current character matches the first letter in the word.
                if(currentChar == currentWord[0]){
                    let surroundingLetters = [
                        grid[row - 1][col - 1],
                        grid[row - 1][col],
                        grid[row - 1][col + 1],
                        grid[row][col - 1],
                        grid[row][col + 1],
                        grid[row + 1][col - 1],
                        grid[row + 1][col],
                        grid[row + 1][col + 1],
                    ]
                    console.log('surroundinLetters:', surroundingLetters)
                }
            }
        }
    }
}

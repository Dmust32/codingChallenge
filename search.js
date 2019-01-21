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
    let rowDirections = [-1,-1,-1,0,0,1,1,1]
    let colDirections = [-1,0,1,-1,1,-1,0,1]
    let results = []
    // Get the current word

    for(let word = 0; word < wordlist.length; word ++){
        let currentWord = wordlist[word].toLowerCase().split('')

        // Get the current character
        for(let row = 0; row < grid.length; row ++ ){
            for(let col = 0; col < grid[row].length; col ++){
                let currentChar = grid[row][col].toLowerCase()

                // Check to see if the current character matches the first letter in the word.
                if(currentWord[0] === currentChar){
                    
                    // Loop through the directions to check the surrounding letters.
                    for(let dir = 0; dir <= 8; dir++){
                        // Set initial values for the direction to check in.
                        let rowDir = row + rowDirections[dir]
                        let colDir = col + colDirections[dir]
                        let i
                        // Loop through the rest of the word.
                        for(i = 1; i < currentWord.length; i ++){
                            if(!grid[rowDir] || !grid[rowDir][colDir] || grid[rowDir][colDir].toLowerCase() !== currentWord[i]){
                                break
                            }
                            // Move directions to where the letters matched.
                            rowDir += rowDirections[dir]
                            colDir += colDirections[dir]
                        }
                        // Check to see if it found the whole word and send the word to results.
                        if(i === currentWord.length){
                            results.push(currentWord.join(''))
                        }    
                    }
                }
            }
        }
    }
    return results
}

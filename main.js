
// My brain is not comprehending JS


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr) {
    for (let i = 0; i < str.length; i ++ )   
     if (str.includes(arr[i]))
     console.log("Matched");
     else console.log("No Matches")
     }
 
 findWords(dog_string, dog_names)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArray = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < str.length; i ++ ) 
    if (arr[i] % 2 == 0)
}

// Ive sat here for way too long and just have no clue what to do
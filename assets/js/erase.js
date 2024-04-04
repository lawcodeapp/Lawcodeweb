//Define the placeholder where the text will be write in thanks to his id.
let placeholder = document.getElementById("text");
let placeholder2 = document.getElementById("text2");
//Stock all of the sentences pieces in an array.
let url = window.location.href;

let words = ["រដ្ឋធម្មនុញ្ញ", "ក្រមព្រហ្មទណ្ឌ","ក្រមនីតិវិធីព្រហ្មទណ្ឌ", "ក្រមរដ្ឋប្បវេណី","ក្រមនីតិវិធីរដ្ឋប្បវេណី"];
let words2 = ["", "","", "",""];

if(url=="https://www.khmerlawcode.com/Lawcodeweb/eng"){
  words = ["Constitution", "Criminal Code","Criminal              ", "Civil Code","Civil              "];
  words2 = ["", "","Procedure Code", "","Procedure Code"];
}
//Initialize the index at the first element of the previously created array.
let index = 0;
function type(word){
    let i = 0;
		//Set the interval that makes the writing animation.
    let writing = setInterval(()=>{
				//Add the letter at the i index of the current word in the placeholder.
        placeholder.innerHTML += word.charAt(i);
        placeholder2.innerHTML += word.charAt(i);
        i ++;
				//If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
        if(i>=word.length){
            clearInterval(writing);
            setTimeout(erase, 1000);
        }
    }, 75)

}

function type(word,word2){
    let i = 0;
		//Set the interval that makes the writing animation.
    let writing = setInterval(()=>{
				//Add the letter at the i index of the current word in the placeholder.
        placeholder.innerHTML += word.charAt(i);
        placeholder2.innerHTML += word2.charAt(i);
        i ++;
				//If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
        if(i>=word.length){
            clearInterval(writing);
            setTimeout(erase, 1000);
        }
    }, 75)

}

function erase(){
	//Set the interval that makes the deleting animation.
    let deleting = setInterval(() => {
				//Pop off the last character of the previously written sentence.
        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
        placeholder2.innerHTML = placeholder2.innerHTML.slice(0,-1);
				//If no one single letter remains, the deleting animation interval stops.
        if(placeholder.innerHTML.length <= 0){
            clearInterval(deleting);
						//The index var increases by 1, the writing animation is about to start with the next sentence.
            index++;
						//If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.
            if(index>=words.length){
                index = 0;
            }
            type(words[index],words2[index])
        }


    }, 25);

}

//Start the whole animation.
type(words[index],words2[index]);

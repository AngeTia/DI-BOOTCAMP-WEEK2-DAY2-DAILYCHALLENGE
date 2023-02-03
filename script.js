/*********************************
Correcteur: Yannick GOUGUIA

Vous avez soumis l'exercice du jour 2 a la place du jour 1
Merci de bien verifier vos repo github
*********************************/


let sentence =  "The day is not that bad, i like it";
let wordNot = sentence.search("not");
let wordBad = sentence.search("bad");

if (wordNot > wordBad || wordNot !== -1 && wordBad !== -1){
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence)
} else {
    console.log(sentence)
}

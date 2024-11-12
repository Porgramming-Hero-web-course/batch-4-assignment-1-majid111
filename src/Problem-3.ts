const countWordOccurrences=(sentence:string,searchingWord:string)=>{
const sentenceArray=sentence.toLocaleLowerCase().split(" ");
const wordLowercase=searchingWord.toLocaleLowerCase();
const filterSentence=sentenceArray.filter((word:string)=>word===wordLowercase);

const wordCount:number=filterSentence.length;

console.log(filterSentence,wordCount);
}


countWordOccurrences("I love typescript", "typescript");
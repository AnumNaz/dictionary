let input= document.querySelector(".input");
let btn= document.querySelector(".search");
let word = document.querySelector(".word");
let detail = document.querySelector(".detail");
let meaning = document.querySelector(".mean");
let exp = document.querySelector(".example");
let syn = document.querySelector(".syn");


let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";


btn.addEventListener("click", () => {
    
    let value = input.value.trim(); 
    if(!value==""){
        fetch(`${url}${value}`)
        .then((res)=>{
             return res.json();
        })
        .then((data)=>{
            console.log(data);
            word.textContent= value.toUpperCase();
            detail.textContent=`${data[0].meanings[0].partOfSpeech}  ${data[0].phonetics[0].text}`;
            meaning.textContent=`${data[0].meanings[0].definitions[0].definition}`;
            exp.textContent = `${data[0].meanings[0].definitions[0].example}`;
            syn.textContent= `${data[0].meanings[0].synonyms}` ;
            input.value="";
        })
        .catch(()=>{
            alert("Word Not Found");
        })
    }
    else{
        alert("Enter a Word!")
    }
   
    
});

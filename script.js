const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getLetterAamount (str1, str2) {
    let counter1=0;
    let counter2=0;
    for(let i=0; i<=str1.length; i++){
        let letter1 = str1.charAt(i);
            if (letter1 =='а'){
                counter1 +=1;
            }
        }

    for(let i=0; i<=str2.length; i++){
        let letter2 = str2.charAt(i);
            if (letter2 =='а'){
                 counter2 +=1;
            }
        }
        
    if(counter1<counter2){
        return str1;
    } else if (counter1>counter2){
        return str2;
    } 
}

    
   
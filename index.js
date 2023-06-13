function firstLoop(total) {
    

    for(let i =0; i < total; i++){
        console.log(i);
    }
}

function fingerLoop() {
    const totalFinger = 10;

    for(let i = 0; i < totalFinger; i++){
    let sentence = 'I have ' + (i+1) + ' fingers';
    console.log(sentence);
    }
}

function arrayLoop(array) {
    for(let i = 0; i<array.length; i++){
      const result = array[i];
      console.log(result)
    }
}


const primeArray = [2,3,5,7,13,17,19,];

arrayLoop(primeArray);





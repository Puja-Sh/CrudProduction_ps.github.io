const btn = document.getElementById('btn');


let array1 = [];

for(let i=0 ; i < 10 ; i++){
    array1[i] = 0;
}

const search = () => {
    const fromDay = document.getElementById('fromDay').value;
    const toDay = document.getElementById('toDay').value;
    const messageBox = document.getElementById('message');

    if( fromDay >= 10 || toDay >=10){
        messageBox.innerHTML = `<span class="result"> Must be less than 10 </span>`
    } else {
        for(let i=fromDay ; i<=toDay ; i++){
            if( array1[i] == 0) {
                array1[i] = 1;
                messageBox.innerHTML = `<span class="result"> Booked </span>`
            } else if( !array1[i] ){
                messageBox.innerHTML = `<span class="result"> Ops! you forgot to mention day </span>`
                
            } else if( array1[i] != 0){
                console.log('full');  
                messageBox.innerHTML = `<span class="result"> No room is/are available from Day-${fromDay} to Day-${toDay} </span>`
                break;
            }
            
        }
    }

}

btn.addEventListener('click', search)

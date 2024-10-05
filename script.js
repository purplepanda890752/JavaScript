//clear the calculator
function clearscreen(){
    document.getElementById("result").value="";
}

function setscreenvalue(value){
    document.getElementById("result").value+=value;
}

function calculatoresult(){
    const resultelement=document.getElementById("result");
    const expression = resultelement.value.trim();

    //check for empty input
    if(expression==''){
        resultelement.value='Enter an input';
        return;
    }
    try{
        resultelement.value=eval(expression);
    }catch(e){
        resultelement.value='Invalid input';
    }
}
var dispaly = document.getElementById('display');
var btns = document.querySelectorAll('.btns button')

for(let i = 0; i < btns.length; i++){
    var btn = btns[i];

    btn.addEventListener('click', function(e){
        var text = e.target.innerText;

        
        if(text === '='){
           var result = eval(dispaly.value);
           dispaly.value = result; 
        }
        else if(text === 'AC'){
            dispaly.value = '0';
        }
        else{
            dispaly.value += text;
        }
    });
}
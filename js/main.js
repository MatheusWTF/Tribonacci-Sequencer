const number = document.getElementById('number');
const submit = document.getElementById('submit');
const output = document.getElementById('textarea1');


function fibonacci(){
    let iteration = number.value;
    var n1 = 0;
    var n2 = 1;
    var n3 = 1;
    var temp;
    var array = []
    for(i = 0; i < iteration; i++){
        array.push(n1);
        temp = n1+n2+n3;
        n1 = n2;
        n2 = n3;
        n3 = temp;
    };
    output.innerHTML = array;
}

function sum(){
    const num=document.getElementById('number').value;

    const dis = document.getElementById('display');

    let ans ="";
    let sum=0;
    for(let a=1; a<=num; a++){
        ans += a + "<br/>";
        sum+=a;
    }

    ans += "The sum is " + sum;
    dis.innerHTML = ans;

    /* const display = document.getElementById('display');
    display.innerHTML += "sample<br/>" */

    /* document.getElementById('display').innerHTML = 'sample'; */
    
    /* let sum=0;
    for(let a=1; a<=20; a++){
        console.log(a);
        sum+=a;
    }
    console.log("The sum is", sum); */
}

function factorial(){
    let number =document.getElementById('number').value;
    let ans= "";
    let product = number;
    let num = number;
    while (num > 1){
        ans += num + "<br/>"
        product *= (num - 1);
        num--;
    }
    ans += num + "<br/>"
    ans += " The factorial of " + number + " is " + product;
    document.getElementById('display').innerHTML = ans;
}

function odd(){
    const num=document.getElementById('number').value;

    const dis = document.getElementById('display');

    let ans ="The Odd numbers are; <br/>";
    for(let a=1; a<=num; a++){
        if (a % 2 !== 0){
            ans +=a + "<br/>";
        }
       
    }
    dis.innerHTML = ans;
}

function even(){
    const num=document.getElementById('number').value;

    const dis = document.getElementById('display');

    let ans ="The Even numbers are; <br/>";
    for(let a=1; a<=num; a++){
        if (a % 2 === 0){
            ans +=a + "<br/>";
        }
       
    }
    dis.innerHTML = ans;

}
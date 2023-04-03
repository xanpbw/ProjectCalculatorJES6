/*const numbers = document.querySelectorAll(".btn");
//console.log(numbers);

numbers.forEach((number) => {
    console.log(number);
});*/
let input="";
let operator= "";
let eqz=false;

const calc = {n1:0,n2:0,res:0};//object

function plus(n1,n2){
    return parseFloat(n1)+parseFloat(n2);
}
function minus(n1,n2){
    return parseFloat(n1)-parseFloat(n2);
}
function times(n1,n2){
    return parseFloat(n1)*parseFloat(n2);
}
function divide(n1,n2){
    return parseFloat(n1)/parseFloat(n2);
}
function percent(n1,n2){
    return parseFloat(n1)*(parseFloat(n2)/100);
}
const num = (value) => {
    switch (value){
        case "+":
            if (operator){
                if (input){
                    calc.n1=calc.res;
                }
            }
            input="";
            eqz=false;
            operator = value;
            document.getElementById("operator").value = operator;
            break;
        case "-":
            if (operator){
                if (input){
                    calc.n1=calc.res;
                }
            }
            input="";
            eqz=false;
            operator = value;
            document.getElementById("operator").value = operator;
            break;
        case "/":
            if (operator){
                if (input){
                    calc.n1=calc.res;
                }
            }
            input="";
            eqz=false;
            operator = value;
            document.getElementById("operator").value = operator;
            break;
        case "x":
            if (operator){
                if (input){
                    calc.n1=calc.res;
                }
            }
            input="";
            eqz=false;
            operator = value;
            document.getElementById("operator").value = operator;
            break;
        case "%":
            if (operator){
                if (input){
                    calc.n1=calc.res;
                }
            }
            input="";
            eqz=false;
            operator = value;
            document.getElementById("operator").value = operator;
            break;
        case ".":
            input=input+".";
            break;
        case "=":
            calc.n1=calc.res;
            document.getElementById("operator").value = value;
            document.getElementById("result").value = calc.res;
            console.log(calc.res);
            eqz=true;
            break;
        case "AC":
            calc.n1=0;
            calc.n2=0;
            calc.res=0;
            input="";
            operator= "";
            eqz=false;
            document.getElementById("operator").value = "All Clear";
            document.getElementById("result").value = calc.res;
            break;
        default:
            if(eqz){
                calc.n1=0;
                calc.n2=0;
                calc.res=0;
                input="";
                operator= "";
                eqz=false;
            }
            input = input+value;
            calc.n2=parseFloat(input);
            document.getElementById("result").value = input;
            if (operator){
                switch(operator){
                    case "+":
                        calc.res=plus(calc.n1,calc.n2);
                        break;
                    case "-":
                        calc.res=minus(calc.n1,calc.n2);
                        break;
                    case "/":
                        calc.res=divide(calc.n1,calc.n2);
                        break;
                    case "x":
                        calc.res=times(calc.n1,calc.n2);
                        break;
                    case "%":
                        calc.res=percent(calc.n1,calc.n2);
                        break;
                    default:
                        console.log(savednumber);
                        break;
                }
            }else{
                calc.n1=parseFloat(input);
            }
            break;
    }
    
};
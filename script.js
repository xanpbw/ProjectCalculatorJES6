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
const num = (value) => {
    switch (value){
        case "+":
            if (operator){
                calc.n1=calc.res;
            }
            input="";
            eqz=false;
            operator = value;
            break;
        case "-":
            if (operator){
                calc.n1=calc.res;
            }
            input="";
            eqz=false;
            operator = value;
            break;
        case "/":
            operator = value;
            divide(input,savednumber);
            break;
        case "x":
            operator = value;
            times(input,savednumber);
            break;
        case "=":
            calc.n1=calc.res;
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
            if (operator){
                switch(operator){
                    case "+":
                        calc.res=plus(calc.n1,calc.n2);
                        break;
                    case "-":
                        calc.res=minus(calc.n1,calc.n2);
                        break;
                    case "/":
                        console.log(savednumber);
                        break;
                    case "x":
                        console.log(savednumber);
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


/*console.log(parseFloat("0"));
const num = (value) => {
    switch (value){
        case "+":
            operator = value;
            tempnumber2 = parseFloat(tempnumber)+tempnumber2;
            tempnumber = "";
            break;
        case "-":
            operator = value;
            if (tn === 0){
                tempnumber2 = parseFloat(tempnumber);
                tn=1;
            }else{
                tempnumber2 = (tempnumber2)-parseFloat(tempnumber);
            }
            tempnumber = "";
            break;
        case "/":
            operator = value;
            if (tn === 0){
                tempnumber2 = parseFloat(tempnumber)/1;
                tn=1;
            }else{
                tempnumber2 = (tempnumber2)/parseFloat(tempnumber);
            }
            
            tempnumber = "";
            break;
        case "x":
            operator = value;
            if (tn === 0){
                tempnumber2 = parseFloat(tempnumber)*1;
                tn=1;
            }else{
                tempnumber2 = parseFloat(tempnumber)*(tempnumber2);
            }
            tempnumber = "";
            break;
        case "=":
            switch(operator){
                case "+":
                    console.log(tempnumber2+parseFloat(tempnumber));
                    break;
                case "-":
                    console.log(tempnumber2-parseFloat(tempnumber));
                    break;
                case "/":
                    console.log(tempnumber2/parseFloat(tempnumber));
                    break;
                case "x":
                    console.log(tempnumber2*parseFloat(tempnumber));
                    break;
                default:
                    break;
            }
            
            break;
        case "AC":
            tempnumber="";
            tempnumber2=0;
            tn=0;
            break;
        default:
            tempnumber = tempnumber+value;
            break;
    }
    
};*/
const input = document.getElementById("expression");
const output = document.getElementById("output");

function enter(value)
{
    input.value+=value;
}

function clearExpression()
{
    input.value='';
    output.display='';
}
function backspace() {
    input.value = input.value.slice(0,-1);
}
function calculate(){
    let expression = input.value.trim();
    console.log(expression);
  

expression = expression
  .replaceAll('^', '**')

  
  .replaceAll(/Sin\(([^)]+)\)/g, 'Math.sin(Math.PI/180*$1)')
  .replaceAll(/Cos\(([^)]+)\)/g, 'Math.cos(Math.PI/180*$1)')
  .replaceAll(/Tan\(([^)]+)\)/g, 'Math.tan(Math.PI/180*$1)')

  
  .replaceAll(/Sin([0-9.]+)/g, 'Math.sin(Math.PI/180*$1)')
  .replaceAll(/cos([0-9.]+)/g, 'Math.cos(Math.PI/180*$1)')
  .replaceAll(/tan([0-9.]+)/g, 'Math.tan(Math.PI/180*$1)')

 
  .replaceAll('sqrt(', 'Math.sqrt(')


  .replaceAll(/sqrt([0-9.]+)/g, 'Math.sqrt($1)');
try {
    let result=Function("return "+expression)();
    if (!isFinite(result)){ throw new Error();}

    output.textContent=result.toFixed(4);
    output.style.color='green';
} 
catch (err){
    console.error("evaluation error:",err);
    output.textContent='Invalid Expression';
    output.style.color='red';
}
        
    };



document.getElementById("alertstring").onclick = function () {
    let fullname = "Muhammad Haroon Shafique";
    alert(fullname);

    let statement = "alert('Muhammad Haroon Shafique')";
    document.getElementById("statement").innerHTML = statement;

    // document.getElementById("output").innerHTML= "";
}
document.getElementById("alertNumber").onclick = function () {

    alert(1234567890);
    let statement = "alert('1234567890')";
    document.getElementById("statement").innerHTML = statement;
    // document.getElementById("output").innerHTML= "";
}

// | Variables Name Legal and Illegal 
document.getElementById("VariableNames").onclick = function () {
    // document.getElementById("statement").innerHTML="";
    // document.getElementById("output").innerHTML="";
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.<li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>.if you assign the string \"Floribundas\" to variable <code>rose</code>, you'll come up empty.</li>  </li></ul>";
    document.getElementById("output").innerHTML = html;
}
// Show Camel Examples
document.getElementById("CamelCaseExamples").onclick = function () {
    // document.getElementById("statement").innerHTML="";
    // document.getElementById("output").innerHTML="";
    let html= "<h3>Examples</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>";
    document.getElementById("output").innerHTML= html;
}
// add two numbers
document.getElementById("sum2numbers").onclick=function(){
    let num1=10;
    let num2=20;
    let sum = num1 + num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ sum +"</p>";
    let statement="let num1="+ num1 + ";<br>let num2="+ num2 +";<br>let sum=   num1   + num2 ";
    document.getElementById("statement").innerHTML = statement;
    
}

// Subtract two numbers
document.getElementById("Subtract2Numbers").onclick=function(){
    let num1=50;
    let num2=30;
    let subtract = num1 - num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ subtract +"</p>";
    let statement="let num1="+ num1 + ";<br>let num2="+ num2 +";<br>let subtract=   num1 - num2 ";
    document.getElementById("statement").innerHTML = statement;
    
}

// Multiply two numbers
document.getElementById("Multiply2Numbers").onclick=function(){
    let num1=25;
    let num2=30;
    let multiply = num1 * num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ multiply +"</p>";
    let statement="let num1="+ num1 + ";<br>let num2="+ num2 +";<br>let multiply=   num1 * num2 ";
    document.getElementById("statement").innerHTML = statement;
    
}

// Divide two numbers
document.getElementById("divide2Numbers").onclick=function(){
    let num1=80;
    let num2=20;
    let divide = num1 / num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ divide +"</p>";
    let statement="let num1="+ num1 + ";<br>let num2="+ num2 +";<br>let divide=   num1 / num2 ";
    document.getElementById("statement").innerHTML = statement;
    
}

// someCalculation numbers
document.getElementById("calculateSomeNumbers").onclick=function(){
    let someCalculation = 36 / 6 * 3 + 2 ** 4 - ( 3 + 5);
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ someCalculation +"</p>";
    let statement= "let someCalculation = 36 / 6 * 3 + 2 ** 4 - ( 3 + 5);"
    document.getElementById("statement").innerHTML = statement;
    
}

// Clear Statement
document.getElementById("clearstatementButton").onclick = function () {
    document.getElementById("statement").innerHTML = "";
}
// Output/Result
document.getElementById("clearoutputtButton").onclick = function () {
    document.getElementById("output").innerHTML = "";
}
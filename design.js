var a=Math.floor(Math.random()*100)+1;
var count=0;

function guessNumber()
{
var val=parseInt(document.getElementById("number").value);
if(val==a)
{
    document.getElementById("result").textContent="Congratulation!!! ,you got the number in "+(count+1)+"tries";
}
else if(val<a)
{
    document.getElementById("result").textContent="Try with a greater number";
    count++;
}
else
{
    document.getElementById("result").textContent="Try with a smaller number";
    count++;
}
}
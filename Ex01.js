function add(x,y)
{
	return x+y;
}

function sub(x,y)
{
	return x-y;
}

function div(x,y)
{
	return x/y;
}

function mul(x,y)
{
	return x*y;
}

var myMath = (num1,num2,myfun)=>
{
	console.log(myfun(num1,num2));
}

myMath(10,3,add);
myMath(10,3,sub);
myMath(10,3,div);
myMath(10,3,mul);
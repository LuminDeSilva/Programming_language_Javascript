function adder(x,y)
{
	return x+y;
}

function sub(x,y)
{
	return x-y;
}

function multiply(x,y)
{
	return x*y;
}

function division(x,y)
{
	return x/y;
}

function logger(result)
{
	printLine(result);
}

function printLine(message)
{
	console.log("Result : "+message);
}
module.exports={adder,sub,multiply,division,logger};
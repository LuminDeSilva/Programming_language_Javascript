/*write a callback function to find the area of square.
	findArea(onesidelength)
	{
		return onesidelength*onesidelength;
	}
	applysidelength(callback)
	{
		return callback(sidelength);
	}
*/

function findArea(length)
{
	return length*length;
}

var FArea = (num1,myfun)=>
{
	console.log(myfun(num1));
}

FArea(7,findArea);

const sideLength = 5;

//caller function takes a callback function
function applySideLength(callback)
{
	return callback(sideLength);
}

//callback must expect the possible argument from the calling
function areaOfSquare(side)
{
	return side*side;
}
console.log(applySideLength(areaOfSquare)); // =>25

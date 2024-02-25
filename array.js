/*create a function called mapping that takes two inputs:
an array of numbers and a callback function.
mapping return the new arrayfilled with numbers that are the result of callback.

function mapping(array,callback)
mapping([2,4,3],sum)       output:[6,5,7]          hint:2+4,2+3,4+3
mapping([3,4,5,6],sum)     output:[7,8,9,9,10,11]
*/

function sum(arr)
{
	for(i=0; i<arr.length-1; i++)
	{
		for(j=i+1; j<arr.length; j++)
		{
			console.log(arr[i]+arr[j]);
		}
	}
}

let findsum=(arr,myfun)=>
{
	myfun(arr);
}

findsum([2,4,3],sum);
console.log();
findsum([3,2,5,6],sum);


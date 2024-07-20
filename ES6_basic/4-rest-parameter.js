export default function returnHowManyArguments(...theArgs) {
	let sum = 0;
	for (const i of theArgs)
	{
		sum += 1;
	}
	return sum;
}

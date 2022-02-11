import { get, SEP } from '../utils';
import { nutsPop } from '../queries';

export const getNutsPop = () =>
	get(SEP)(nutsPop)
		.then((r) => r.json())
		.then((r) => {
			debugger;
			console.log(r);
		});

import { usePost, SEP } from '../utils';
import { nutsPop } from '../queries';
import { GET_NUTS_POP } from 'api/constants';

export const useFetch = (constant) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(SEP)(nutsPop);
		default:
			return null;
	}
};

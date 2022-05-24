import { usePost, SEP } from '../utils';
import { nutsPop } from '../queries';
import { nutsPop2 } from '../queries';
import { popAq } from '../queries';
import { nuts } from '../queries';
import { lau } from '../queries';
import { aq } from '../queries';

import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';
import { GET_POP_AQ } from 'api/constants';
import { NUTS } from 'api/constants'; 
import { LAU } from 'api/constants'; 
import { AQ } from 'api/constants'; 

export const useFetch = (constant, country, lang, municipality) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(SEP)(nutsPop);
		case GET_NUTS_POP2:
			return usePost(SEP)(nutsPop2);
		case NUTS:
			return usePost(SEP)(nuts({countryToSelect: country})); 
		case LAU:
			return usePost(SEP)(lau({lang: lang})); 
		case GET_POP_AQ:
			return usePost(SEP)(popAq({country: country, lang: lang})); 
		case AQ:
			return usePost(SEP)(aq({country: country, lang: lang, municipality: municipality})); 
		default:
			return null;
	}
};

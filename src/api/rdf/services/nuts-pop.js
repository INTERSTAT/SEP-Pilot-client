import { usePost, SEP } from '../utils';
import { nutsPop, nutsPop2, popAq, nuts, lau, aq, countries } from '../queries';

import { GET_NUTS_POP, GET_NUTS_POP2, GET_POP_AQ, NUTS, LAU, AQ, GET_COUNTRIES } from 'api/constants';

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
			let language = country.toString().toLowerCase();
			return usePost(SEP)(popAq({country: country, lang: language})); 
		case AQ:
			return usePost(SEP)(aq({country: country, lang: lang, municipality: municipality})); 
		case GET_COUNTRIES:
			return usePost(SEP)(countries);
		default:
			return null;
	}
};

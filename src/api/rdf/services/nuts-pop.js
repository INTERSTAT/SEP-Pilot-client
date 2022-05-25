import { usePost, SEP } from '../utils';
import { nutsPop, nutsPop2, popAq, nuts, lau, aq, countries, ageGroups, lauByNuts, popByLauAge } from '../queries';

import { GET_NUTS_POP, GET_NUTS_POP2, GET_POP_AQ, NUTS, LAU, AQ, GET_COUNTRIES, AGE_GROUPS, GET_LAU_FROM_NUTS, POP_FROM_LAU_AGE } from 'api/constants';

export const useFetch = (constant, country, lang, municipality, nuts3Code, ageGroup  ) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(SEP)(nutsPop);
		case GET_NUTS_POP2:
			return usePost(SEP)(nutsPop2);
		case NUTS:
			return usePost(SEP)(nuts({countryToSelect: country})); 
		case LAU:
			return usePost(SEP)(lau({lang: lang})); 
		case GET_LAU_FROM_NUTS:
			return usePost(SEP)(lauByNuts({lang: lang, nuts3Code:nuts3Code }));  
		case AGE_GROUPS:
			return usePost(SEP)(ageGroups);
		case GET_POP_AQ:
			let language = country.toString().toLowerCase();
			return usePost(SEP)(popAq({country: country, lang: language})); 
		case AQ:
			return usePost(SEP)(aq({country: country, lang: lang, municipality: municipality})); 
		case GET_COUNTRIES:
			return usePost(SEP)(countries);
		case POP_FROM_LAU_AGE:
			return usePost(SEP)(popByLauAge({ municipality: municipality, ageGroup: ageGroup })); 
		default:
			return null;
	}
};

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const PaperInterstat = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
}));

export default PaperInterstat;

import { Stack, Typography } from '@mui/material';

import GraaspLogo from '../GraaspLogo/GraaspLogo.js';
import EPFLLogo from '@/GraaspLogo/EpflLogo.js';

const LogoHeader = (): JSX.Element => (
  <Stack
    direction='row'
    alignItems='center'
    textTransform='none'
    color='inherit'
    spacing={1}
  >
    <GraaspLogo height={50} />
    <Typography
      sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '8px'}}
      color='currentcolor'
      variant='h6'
    >
      LNCO.ai
    </Typography>
  </Stack>
);
export default LogoHeader;

import { Backdrop, CircularProgress } from '@mui/material';

export function LoadingBlock ({open, size = 30}:{open:boolean, size?: number}) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 99, position: 'absolute' }}
            open={open}
        >
            <CircularProgress color='inherit' size={size}/>
        </Backdrop>
    );
}
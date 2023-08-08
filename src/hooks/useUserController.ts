import { useQuery } from 'react-query';
import axios from 'axios';
import { IResponseAPI } from '../models/IResponse';
import { IBank } from '../models/IBank';

// import { getParamsFromUrl } from 'features/well-viewer/utils/seismicUrlUtils';
const baseUrl = `https://localhost:7153/`;
export function useGetAllBanks(){
    return useQuery('getAllBanks',async ()=>{
        const response = await axios.request<IBank[]>({
            method: 'get',
            url: `https://brasilapi.com.br/api/banks/v1`,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;

    });
}
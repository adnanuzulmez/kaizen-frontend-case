import axios from "axios";
import { api } from "../constants";
export const getContentData = async () =>{
    const { data } = await axios.get(api,{
        headers: {
            'X-Country-Id':'TR',
            'X-Language-Id':'TR'
    }})
    console.log(data);
    return data;
}
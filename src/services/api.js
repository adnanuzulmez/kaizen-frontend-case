import axios from "axios";
const api = 'https://api.extrazone.com/promotions?Id=33'
export const getContentData = async () =>{
    const { data } = await axios.get(api,{
        headers: {
            'X-Country-Id':'TR',
            'X-Language-Id':'TR'
    }})
    console.log(data);
    return data;
}
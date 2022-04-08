import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) =>  {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '55c2fa48d7msh71c6088c920825ap1740ddjsnaf186eed00dc'
          }
    })

    return data;
}
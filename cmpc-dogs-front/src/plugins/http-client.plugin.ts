import axios from "axios";



export const fetchApiClientPlugin = {

    get: async (url: string) => {
        const resp = await fetch(url);
        return await resp.json();
    }
}

export const AxiosClientPlugin = {

    get: async (url: string, data?: object) => {

        const config = {
            url: url,
            method: 'GET',
            mode: 'no-cors',
            data: data
        };

        const resp = await axios(config)
        return resp.data;
    },

    delete: async (url: string, data: object) => {

        const config = {
            url: url,
            method: 'DELETE',
            mode: 'no-cors',
            data: data
        };

        const resp = await axios(config)
        return resp.data;
    },

    post: async (url: string, data: object) => {

        const config = {
            url: url,
            method: 'POST',
            mode: 'no-cors',
            data: data
        };

        const resp = await axios(config)
        return resp.data;
    },

    put: async (url: string, data: object) => {

        const config = {
            url: url,
            method: 'PUT',
            mode: 'no-cors',
            data: data
        };

        const resp = await axios(config)
        return resp.data;
    }
}



import axios from 'axios';

export async function getLaunches(query = {}, options = {}) {
    return new Promise(async (resolve, reject) => {
        return axios({
            url: "https://api.spacexdata.com/v4/launches/query",
            data: {
                "query": query,
                "options": options
            },
            method: "POST"
        })
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : 500));
    });
};
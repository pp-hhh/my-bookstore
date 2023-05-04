export const getStorageList = async (url, callback) => {
    let opts = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: "http://localhost:3000"
    }

    await fetch(url, opts)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        })
}
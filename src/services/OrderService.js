export const getOrders = async (url, callback) => {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error(error);
        });
}
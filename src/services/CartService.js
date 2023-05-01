export const getCartItems = async (url, data, callback) => {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const  deleteCartItem = async (url, json, callback) => {
    let opts = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(json)
    }

    await fetch(url, opts)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const updateCartItem = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(json)
    }

    await fetch(url, opts)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const purchaseCartItems = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(json)
    }
    await fetch(url, opts)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error(error);
        });
}
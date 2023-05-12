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

export const updateBookStorageInfo = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(json),
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


export const addStorageItem = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(json),
        origin: "http://localhost:3000",
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

export const deleteStorageItem = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: "http://localhost:3000",
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


export const getAllOrders = async (url, callback) => {
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

export const getAllUsers = async (url, callback) => {
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

export const updateUserStatus = async (url, data, callback) => {
    let opts = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: "http://localhost:3000",
        body: JSON.stringify(data)
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
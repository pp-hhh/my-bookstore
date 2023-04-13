

let postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

let postRequest = (url, json, callback) => {

    let opts = {
        method: "POST",

        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: 'http://localhost:3000',
        body: JSON.stringify(json),
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            console.log("test");
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {postRequest,postRequest_v2};
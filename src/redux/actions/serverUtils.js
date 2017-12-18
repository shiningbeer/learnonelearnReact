export function accessServerUrl(url, dict_of_params, callback) {
    fetch(url, {
        method: 'POST',
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dict_of_params)
    })
        .then((response) => response) //把response转为json
        .then((responseData) => { // 上面的转好的json
            callback(true, responseData)
        })
        .catch((error) => {
            callback(false, { 'error': error });//网络连接失败
        });
}
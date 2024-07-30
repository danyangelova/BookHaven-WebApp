async function requester(method, url, data) {
    const options = {};

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        };

        options.body = JSON.stringify(data);
    }

    const resp = await fetch(url, options);
    const result = resp.json();

    return result;
}

export async function get(url) {
    return requester('GET', url);
}

export async function post(url, data) {
    return requester('POST', url, data);
}

export async function put(url, data) {
    return requester('PUT', url, data);
}

export async function del(url) {
    return requester('DELETE', url);
}
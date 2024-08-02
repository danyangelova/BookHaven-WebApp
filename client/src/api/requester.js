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

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (!response.ok) {
            console.log(result);
            throw result;
        }
        return result;

    } catch (err) {
        console.error('Request failed:', err);
        throw err;
    }

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
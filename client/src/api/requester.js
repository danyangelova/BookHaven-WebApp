const request = async (url, options) => {
    const response = await fetch(url, options);
    // console.log(response);
    

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`!!HTTP error! status: ${response.status}, message: ${errorText}`);
    }


    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();

    } else {
        throw new Error('!!Unexpected content type: ' + contentType);
    }
};



export const get = (url) => {
    return request(url, {
        method: 'GET'
    });
};


export const post = (url, data) => {
    return request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};


export const put = (url, data) => {
    return request(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};


export const del = (url) => {
    return request(url, {
        method: 'DELETE'
    });
};

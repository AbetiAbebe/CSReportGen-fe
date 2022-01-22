import { authHeader } from '../_helpers';


export const reportService = {
    getToken,
  
};

function getToken() {
    const requestOptionsToken = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({           
            "userId": 0,
            "userName": "string",
            "password": "string",
            "corpName": "string",
            "permissions": [
              0
            ],
            "apiKey": "string"            
        })
    };
    
    return fetch(`https://localhost:44338/v1/token/token`, requestOptionsToken)
    .then(handleResponse)
    .then(token => {
        localStorage.setItem('token', JSON.stringify(token));
    });
}




function handleResponse(response) {
    return response.text().then(text  => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
               
                // location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
import React from 'react';

class LoginRepository {
    // This class can be expanded for more complex login-related operations

  loginUser(username: string, password: string) {
    return fetch('https://reqres.in/api/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },  
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }   
        return response.json();
    })
    .then(data => {
        return data;
    })  
    .catch(error => {
        throw error;
    });
}
}

export default LoginRepository;
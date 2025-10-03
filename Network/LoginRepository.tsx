import React from 'react';
import User from '../Views/Model/User';



let LOGIN_API = "http://192.168.1.8:3000/user";
export function fetchLogin(username: string, password: string) {
    return fetch(LOGIN_API, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
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


export function registerUser(user: User, callback?: (result: string) => void) {
    return fetch(LOGIN_API, {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((response) => response.json())    
        .then((json) => {
            const result = JSON.stringify(json);
            console.log("Fetch API call result is ", json);
            if (callback) {
                callback(result);
            }
            return result;
        })
        .catch((error) => {
            console.error(error);
            if (callback) {
                callback(null as any);
            }
            return null;
        });
}
    //    return fetch(LOGIN_API, {
    //         method: 'POST', 
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //            user
    //         )
    //     })
    //         .then((response) => response.json())    
    //         .then((json) => {
    //             console.log("Fetch API call result is ", json);
    //             return JSON.stringify(json);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             return null;
    //         });
    // }


// class LoginRepository {
//     // This class can be expanded for more complex login-related operations

//   loginUser(username: string, password: string) {
//     return fetch('https://reqres.in/api/login', {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json'
//         },  
//         body: JSON.stringify({
//             email: username,
//             password: password
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }   
//         return response.json();
//     })
//     .then(data => {
//         return data;
//     })  
//     .catch(error => {
//         throw error;
//     });
// }
// }

// export default LoginRepository;
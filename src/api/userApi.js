//act as an API Proxy

export function getUsers(){
    return fetch("http://localhost:3001/users").then( response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("terrible response");
        }
    });
}

export function deleteUser(userId){
    return fetch("http://localhost:3001/users/" + userId, {
        method:'DELETE' 
    }).then( response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("terrible response");
        }
    });
}

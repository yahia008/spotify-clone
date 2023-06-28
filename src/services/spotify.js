
export const endPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/'

const clientId ='2c22467d71d24e7e90d50f18ffe82b41'

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'

]

export const getToken = () => {

    return window.location.hash
    .substring(1)
    .split('&')  
    .reduce((initial, item) => {

        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {})

}

export const loginUrl =`${endPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
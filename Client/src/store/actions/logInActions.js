export const REQUEST_USER ='REQUEST_USER'    
export function requestUser(userData) {
    return {
        type: REQUEST_USER,
        userData
    }
}

export const SEND_USER = 'SEND_USER'
export function sendUser(userData) {
  return {
      type: SEND_USER,
      userData

  }
}

export const STORE_TOKEN_USER = 'STORE_TOKEN_USER'
export function storeTokenUser(token, decodedUser) { //stores token and decoded token user info 
  return {
      type: STORE_TOKEN_USER,
      token,
      decodedUser
  }
}

export function fetchLogin (userData) { //user y pass
    return dispatch => {
        dispatch(requestUser(userData)) //user y pass
        return fetch('http://localhost:5000/auth/login', {
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              userData: userData //user y pass
          })
        })
        .then(
            userResponse => { return userResponse.json()}, 

            error => console.log('an error ocurred', error)
        )
        .then( userJson => dispatch(sendUser(userJson)) //send user token to redux
        )
    }
  }
import {SEND_USER, REQUEST_USER, STORE_TOKEN_USER} from '../actions/logInActions'

const initState= {
  isFetching: false,
  user:{},
  token: "",
  success: false,
  error: false
}

function userReducer(state = initState, action
  ) {
    switch (action.type) {
        case REQUEST_USER:
          return Object.assign({}, state, {
            isFetching: true,
          })
      case SEND_USER: 
        return Object.assign({}, state, {
          isFetching: false,
          user: action.userData,
          token: action.userData.token,
          success: true
        })
      case STORE_TOKEN_USER:
          return Object.assign({}, state, {
            isFetching: false,
            token: action.token,
            user: action.decodedUser
          })
      default:
        return state
    }
  }
  export default userReducer;
  
import { createReducer } from './redux-boiler-plates'

const defaults = {
  addresses: ''
}

const login = (state, action) => ({ ...action.user })
const logout = (state, action) => ({})

const indexUserAddress = (state, action) => ({ ...state, addresses: action.addresses })
const updateUserAddress = (state, action) => {
  const index = state.addresses.findIndex( (add) => {
    return parseInt(add.id, 10) === parseInt(action.address.id, 10)
  })
  return {
    ...state,
    addresses: [
      ...state.addresses.slice(0,index),
      action.address,
      ...state.addresses.slice(index + 1)
    ],
  }
}
const showUserAddress = (state, action) => ({ ...state, addresses: [ action.address ] })
const createUserAddress = (state, action) => ({ ...state, addresses: [...state.addresses, action.address] })
const deleteUserAddress = (state, action) => {
  const index = state.addresses.findIndex( (address) =>
    parseInt(address.id, 10) === parseInt(action.address.id, 10)
  )
  if( index >= 0 ) {
    return {
      ...state,
      addresses: [
        ...state.addresses.slice(0, index),
        ...state.addresses.slice(index + 1)
      ],
    }
  }
}

const user = createReducer(defaults, {
  LOGIN: login,
  LOGOUT: logout,
  INDEX_USER_ADDRESSES: indexUserAddress,
  UPDATE_USER_ADDRESS: updateUserAddress,
  SHOW_USER_ADDRESS: showUserAddress,
  CREATE_USER_ADDRESS: createUserAddress,
  DELETE_USER_ADDRESS: deleteUserAddress,
})

export default user

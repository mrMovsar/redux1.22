
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reduser = (state, action) =>{
  switch (action.type){
    case "delete":
      return state.filter((todo, i) => {
        if(action.payload===i){
          return false
        }
        return true
      }) 
    default:
    return [
      {title: "mahram", completed: false},
      {title: "sibiryak", completed: false}
    ]
  }
}

const store = createStore(reduser);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

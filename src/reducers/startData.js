const initialState = {
  "users": [
    {
      "photo": "/images",
      "name": "Имя",
      "surname": "Фамилия",
      "options": []
    },
    {
      "photo": "/images",
      "name": "Океанtest",
      "surname": "Автоtest",
      "options": []
    }
  ],
  "services": []
}

export default function startData (state = initialState, action) {
  if(action.type === 'ADD_START_DATA') {
    action.payload.registered = (function() {
      if (JSON.parse(localStorage.getItem('autorisation'))) {
        return JSON.parse(localStorage.getItem('autorisation')).registered;
      } else {
        return false;
      }
    })();

    action.payload.autorisation = JSON.parse(localStorage.getItem('autorisation'));
    return Object.assign(...state, action.payload)
  }
  return state;
};

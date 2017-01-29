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
    return Object.assign(...state, action.payload)
  }
  return state;
};

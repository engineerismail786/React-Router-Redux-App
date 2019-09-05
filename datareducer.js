export default function(state = [], action) {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, { id: action.id, data: action.FormData }];
    default:
      return state;
  }
}

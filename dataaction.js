var id = 0;
export const addData = FormData => ({
  type: "ADD_DATA",
  id: id++,
  FormData
});

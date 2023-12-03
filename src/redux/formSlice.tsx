import { createSlice } from '@reduxjs/toolkit';
import { FormData } from '../type/types';

interface State {
  formInfo: FormData[];
}

const initialState: State = {
  formInfo: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm(state, action) {
      const { firstName, age, email, password, gender, picture, country } =
        action.payload;
      state.formInfo.push({
        firstName,
        age,
        email,
        password,
        gender,
        country,
        picture,
      });
    },
  },
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;

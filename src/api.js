import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://645cb653250a246ae30bca7f.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'myContacts/fetchContacts',
  async function (_, thunkAPI) {
    try {
      const response = await axios(`contacts/`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'myContacts/addContact',
  async function ({ name, phone }, thunkAPI) {
    try {
      const response = await axios.post('contacts/', { name, phone });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'myContacts/removeContact',
  async function (id, thunkAPI) {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

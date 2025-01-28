import { createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch data from an API
export const fetchImages = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=2');
  const data = await response.json();
  return data.length > 0 ? [data[0].url, data[1].url] : [];
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  newsItems: [],
  isLoading: true,
};

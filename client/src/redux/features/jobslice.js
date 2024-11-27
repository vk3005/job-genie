import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks
export const getAllJobs = createAsyncThunk('jobs/getAllJobs', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/v1/job/get-job');
    return response.data.jobs;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const createJob = createAsyncThunk('jobs/createJob', async (jobData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/v1/job/create-job', jobData);
    return response.data.job;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`/api/v1/job/delete-job/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateJob = createAsyncThunk('jobs/updateJob', async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/api/v1/job/update-job/${id}`, formData);
    return response.data.updateJob;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Slice
const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex((job) => job._id === action.payload._id);
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      });
  },
});

export default jobSlice.reducer;

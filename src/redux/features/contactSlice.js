import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/constants";
import axios from "axios";
const initialState = {
  contactsList: [],
  loading: false,
  error: "",
  formData: {
    name: "",
    familyName: "",
    email: "",
    relation: "نامشخص",
    phoneNumber: "",
  },
};

export const fetchcontacts = createAsyncThunk("contacts/fetchcontacts", async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const createcontact = createAsyncThunk(
  "contacts/addtcontact",
  async (newcontact) => {
    try {
      const res = await axios.post(BASE_URL, newcontact);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const deleteMember = createAsyncThunk(
  "contacts/deleteMember",
  async (id) => {
    console.log(id);
    try {
      const deleteRes = await axios.delete(`${BASE_URL}/${id}`);
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const editMember = createAsyncThunk(
  "contacts/editMember",
  async ({ id, editedInfo }) => {
    try {
      const editedRes = await axios.put(`${BASE_URL}/${id}`, { ...editedInfo });
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

const contactslice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      console.log(action.payload)
      return { ...state, formData: action.payload};
    },
  },
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchcontacts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchcontacts.fulfilled, (state, action) => {
      return { ...state, loading: false, contactsList: action.payload };
    });
    builder.addCase(fetchcontacts.rejected, (state, action) => {
      return { ...state, loading: false, contactsList: [], error: action.payload };
    });
    //   add
    builder.addCase(createcontact.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createcontact.fulfilled, (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: false,
        contactsList: [...state.contactsList, action.payload],
      };
    });
    builder.addCase(createcontact.rejected, (state, action) => {
      return { ...state, loading: false, contactsList: [], error: action.payload };
    });
    //  delete
    builder.addCase(deleteMember.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(deleteMember.fulfilled, (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: false,
        contactsList: action.payload,
      };
    });
    builder.addCase(deleteMember.rejected, (state, action) => {
      return { ...state, loading: false, contactsList: [], error: action.payload };
    });
    //  edit
    builder.addCase(editMember.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(editMember.fulfilled, (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: false,
        contactsList: action.payload,
      };
    });
    builder.addCase(editMember.rejected, (state, action) => {
      return { ...state, loading: false, contactsList: [], error: action.payload };
    });
  },
});

export default contactslice.reducer;
export const { setFormData } = contactslice.actions;

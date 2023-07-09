import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    charImg: '',
    charDisplay : '',
    charInfoData: {},
    charListData: [],
    loading: true,
    state: null,
    tabMenu: [
        {id: 1, tab: '배우 소개', on: true},
        {id: 2, tab: '극중 역할', on: false},
        {id: 3, tab: '명대사', on: false},
        {id: 4, tab: '콘텐츠', on: false},
    ]
}

export const getDrama = createAsyncThunk(
    'drama/getDrama',
    async(text) => {
        try {
            const res = await axios.get('https://gist.githubusercontent.com/thecheeziest/abc2c29ab8e49dd3acd679f126587530/raw/9155612411a7b8bd23509c3212faadb3fb513ca1/drama.json')
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const dramaSlice = createSlice({
    name: 'charList',
    initialState,
    reducers: {
        changeInfo(state, action) {
            const foundItem = state.charListData.find(item => item.id === action.payload);
            state.charInfoData = foundItem;
            state.charImg = foundItem ? foundItem.imgurl : null;
            state.charDisplay = 'on';
            state.tabMenu = state.tabMenu.map(item => item.id === 1 ? {...item, on: true} : {...item, on: false})
        },
        changeImage(state, action) {
            state.charImg = action.payload
        },
        onTab(state, action) {
            state.tabMenu = state.tabMenu.map(item => item.id === action.payload ? {...item, on: true} : {...item, on: false})
        },
        onLogo(state) {
            state.charDisplay = '';
        }
    },
    extraReducers: (builder) => {
        let { pending, fulfilled, rejected } = getDrama
        builder
        .addCase(pending, (state, aciton)=> {
            state.state = 'loading 중'
            state.loading = true
        })
        .addCase(fulfilled, (state, action) => {
            state.state = '성공'
            state.loading = false
            state.charListData = action.payload
        })
        .addCase(rejected, (state, action) => {
            state.state = '실패'
            state.loading = true
        })
    }
})

export const {changeInfo, changeImage, onTab, onLogo} = dramaSlice.actions
export default dramaSlice.reducer
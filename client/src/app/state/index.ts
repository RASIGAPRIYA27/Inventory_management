import { createSlice,PayloadAction } from "@reduxjs/toolkit"

export interface InitialStateTypes{
    isSidebarCollapsed:boolean
}

const initialState:InitialStateTypes={
    isSidebarCollapsed:true,
}


export const globalSlice=createSlice({
    name:'global',
    initialState,
    reducers:{
            setisSidebarCollapsed:(state,action: PayloadAction<boolean>)=>{
                state.isSidebarCollapsed=action.payload
            }
    }  
})
export const{setisSidebarCollapsed}=globalSlice.actions

export default globalSlice.reducer

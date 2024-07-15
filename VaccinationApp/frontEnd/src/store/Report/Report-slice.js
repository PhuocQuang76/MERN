
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reportValues:{}
    // age10: 0,
    // age20: 0,
    // age30: 0,
    // age40: 0,
    // age50: 0,
    // age60: 0,
    // age70: 0,
    // age80: 0,
    // age90: 0,
    // age100: 0,
    // otherAge:0,
    // numberOfMan: 0,
    // numberOfWomen:0

};

const ReportSlice = createSlice({
    name: "report",
    initialState: initialState,
    reducers: {
        addReportValueToStore(state,action){
            return{
                reportValues:action.payload
            }
        }
    }
})

export const ReportActions = ReportSlice.actions;
export default ReportSlice.reducer;


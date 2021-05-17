import { SET_DATA } from "./inputDataTypes";


const initialState = {
    stateName:"",
    guests:1,
    startDate:Date.now(),
    endDate:null
}

const inputDataReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_DATA:
            return{
                ...state,
                stateName:action.payload.stateName,
                guests:action.payload.guests,
                startDate:action.payload.startDate,
                endDate:action.payload.endDate
            }
    
        default:
            return state
    }
}

export default inputDataReducer;
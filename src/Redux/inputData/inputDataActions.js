import { SET_DATA  } from "./inputDataTypes"



export const setData= (stateName,guests,startDate,endDate)=>{
    return{
        type: SET_DATA,
        payload:{
            stateName:stateName,
            guests:guests,
            startDate:startDate,
            endDate:endDate
        }
    }
}

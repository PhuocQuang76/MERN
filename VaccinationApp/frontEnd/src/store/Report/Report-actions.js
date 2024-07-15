
import {ReportActions} from "./Report-slice";
import axios from 'axios';


export const caculateReportValues = () => {
    let maleNum = 0;
    let femaleNum = 0;
    let age10 = 0;
    let age20 = 0;
    let age30= 0;
    let age40 = 0;
    let age50 = 0;
    let age60 = 0;
    let age70 = 0;
    let age80 = 0;
    let age90 = 0;
    let age100 = 0;
    let ageOther = 0;
    return async (dispatch) => {
        try{
            const response = await axios.get("http://localhost:9001/admin/getUsers");
            let users = response.data;
            console.log("users:" + users);
            users.forEach(element => {
                if (element.age <= 10) {
                    age10++;
                } else if (element.age <= 20) {
                    age20++;
                } else if (element.age <= 30) {
                    age30++;
                } else if (element.age <= 40) {
                    age40++;
                } else if (element.age <= 50) {
                    age50++;
                } else if (element.age <= 60) {
                    age60++;
                } else if (element.age <= 70) {
                    age70++;
                } else if (element.age <= 80) {
                    age80++;
                } else if (element.age <= 90) {
                    age90++;
                } else if (element.age <= 100) {
                    age100++;
                } else {
                    ageOther++;
                }


                if(element.gender==="female"){
                    femaleNum++;
                }else if(element.gender==="male"){
                    maleNum++
                }

                let reportValues = {
                    "age10":age10,
                    "age20":age20,
                    "age30":age30,
                    "age40":age40,
                    "age50":age50,
                    "age60":age60,
                    "age70":age70,
                    "age80":age80,
                    "age90":age90,
                    "age100":age100,
                    "ageOther":ageOther,
                    "maleNum":maleNum,
                    "femaleNum":femaleNum
                }
                dispatch(ReportActions.addReportValueToStore(reportValues));

            });
            
            
        }catch (error){
            console.error('Error calculating report values:', error);
        }
    }
}
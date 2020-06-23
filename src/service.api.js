import axios from 'axios';

export default {
    getBookingByMonth: async function (params) {
        console.log(params);
        return await axios({
            method: "GET",
            url: "/api/get/booking",
            params: params
        });
    },
}
import { BOOKING } from "../type/MovieSeatType";
import { CANCEL_BOOKING } from "../type/MovieSeatType";

const stateSeatDefault = {
    seatBookingList: [
    ]
}

export const seatReducer = (state = stateSeatDefault, action) => {
    switch (action.type) {
        case BOOKING: {
            let seatBookingListUpdate = [...state.seatBookingList];
            let index = seatBookingListUpdate.findIndex(picking => picking.soGhe === action.seat.soGhe);
            if (index !== -1) {
                // Nguoi dung remove khi ghe da co trong mang
                seatBookingListUpdate.splice(index,1)
            } else {
                // Nguoi dung add them ghe khi ghe chua co trong mang
                seatBookingListUpdate.push(action.seat)
            }
            state.seatBookingList = seatBookingListUpdate;
            return {...state}
        } 
        
        case CANCEL_BOOKING: {
            let seatBookingListUpdate = [...state.seatBookingList];
            let index = seatBookingListUpdate.findIndex(picking => picking.soGhe === action.seatNumber);
            if (!index !== -1) {
                seatBookingListUpdate.splice(index,1)
            } else return
            state.seatBookingList = seatBookingListUpdate;
            return {...state}
        }

        default: return {...state};
    };
}
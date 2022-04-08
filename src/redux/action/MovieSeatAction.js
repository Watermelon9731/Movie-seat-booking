import { BOOKING, CANCEL_BOOKING } from "../type/MovieSeatType"

export const bookingAction = (seat) => {
    return {
        type: BOOKING,
        seat,
    }
}

export const cancelBookingAction = (seatNumber) => {
    return {
        type: CANCEL_BOOKING,
        seatNumber,
    }
}
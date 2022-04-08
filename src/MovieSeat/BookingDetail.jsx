import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelBookingAction } from '../redux/action/MovieSeatAction'
import { seatReducer } from '../redux/reducers/seatReducer'
import { BOOKING, CANCEL_BOOKING } from '../redux/type/MovieSeatType'

class BookingDetail extends Component {

    renderDetail = () => {
        return this.props.seatBookingList.map((ticket, index) => {
            return (
                <tr key={index}>
                    <td className='pt-3'>{ticket.soGhe}</td>
                    <td className='pt-3'>{(ticket.gia).toLocaleString()} đ</td>
                    <td className='pt-2'>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.dispatch(cancelBookingAction(ticket.soGhe))
                        }}>Xoá</button>
                    </td>
                </tr>
            )
        })
    }

    renderTotal = () => {
        return this.props.seatBookingList.reduce(
            (initial, value) => {
                return initial + value.gia;
            }, 0)
    }

    render() {
        return (
            <div className="row text-center justify-content-center mt-4">
                <table className="table table-bordered col-6 bg-light">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá tiền</th>
                            <th>Tuỳ chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDetail()}
                        <tr>
                            <th>Tổng tiền</th>
                            <th colSpan={2}>{(this.renderTotal().toLocaleString())} đ</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        seatBookingList: rootReducer.seatReducer.seatBookingList,
    }
}

export default connect(mapStateToProps)(BookingDetail)


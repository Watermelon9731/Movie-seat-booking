import React, { Component, Fragment } from 'react'
import InputField from './InputField'
import seatData from '../Data/seatData.json'
import Seat from './Seat'
import BookingDetail from './BookingDetail'
// Connect redux
import { connect } from 'react-redux'

class MovieSeat extends Component {
    renderSeat = () => {
        return seatData.map((seatRow, index) => {
            return (
                <Fragment key={index}>
                    <Seat seatRow={seatRow} />
                </Fragment>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 className='text-center text-white text-uppercase m-5'>ĐẶT VÉ XEM PHIM</h1>
                <div className="form-group container pt-4 pb-3 px-5">
                    <InputField />
                    <div className="row sign mt-4">
                        <div className="col-2">
                            <div className="rec bg-success"></div>
                            <span className='ml-2 text-white'>Ghế đã chọn</span>
                        </div>
                        <div className="col-2">
                            <div className="rec bg-danger"></div>
                            <span className='ml-2 text-white'>Ghế đã đặt</span>
                        </div>
                        <div className="col-2">
                            <div className="rec bg-light"></div>
                            <span className='ml-2 text-white'>Ghế còn trống</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <table className="table text-white seat-selection">
                            <tbody>
                                {this.renderSeat()}
                            </tbody>
                        </table>
                        <div className="col-12 screen bg-warning text-uppercase text-center my-2 p-4">
                            Màn hình
                        </div>
                    </div>
                    <BookingDetail />
                    <div className="row text-center my-2">
                        <div className="col">
                            <button type='submit' className="btn btn-light px-4 py-2 font-weight-bold text-uppercase">Xác nhận đặt vé</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        seatDataState: rootReducer.seatReducer,
    }
}

export default connect(mapStateToProps)(MovieSeat)
import React, { Component } from 'react'
import { seatReducer } from '../redux/reducers/seatReducer'
// Connect redux
import { connect } from 'react-redux'
import { bookingAction } from '../redux/action/MovieSeatAction'

class Seat extends Component {
  renderSeatBox = () => {
    return this.props.seatRow.danhSachGhe.map((seatBox, index) => {
      let cssClass = '';
      let cssClassHeading = '';
      // Render ghe ban dau
      if (!seatBox.hasOwnProperty('daDat')) {
        cssClassHeading = 'font-weight-bold';
      } else if (seatBox.daDat) {
        cssClass = 'reserved-box check-box';
      }
      else if (!seatBox.daDat) {
        cssClass = 'check-box'
      }
      // Click vao ghe de chon
      let seatIndex = this.props.seatBookingList.findIndex(pick => pick.soGhe === seatBox.soGhe);
      if (seatIndex !== -1) {
        cssClass = 'picked-box check-box';
      }

      return (
        <td key={index}>
          <div className={cssClass} onClick={() => {
            this.props.bookingSeat(seatBox);
          }}></div>
          <p className={`${cssClassHeading} pt-2`}>{seatBox.soGhe}</p>
        </td>
      )
    })
  }

  render() {
    return (
      <tr>
        <th>{this.props.seatRow.hang}</th>
        {this.renderSeatBox()}
      </tr>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    seatBookingList: rootReducer.seatReducer.seatBookingList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookingSeat: (seat) => {
      dispatch(bookingAction(seat))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Seat)
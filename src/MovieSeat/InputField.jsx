import React, { Component } from 'react'

export default class InputField extends Component {
    render() {
        return (
            <div className="row">
                <p className='col-12 text-warning py-2'>Vui lòng điền thông tin khách hàng bên dưới để tiến hành đặt chỗ!</p>
                <div className="col-6">
                    <label>Họ và Tên<i> *</i></label>
                    <input type="text" id="nameInput" className="form-control" />
                </div>
                <div className="col-6">
                    <label>Email<i> *</i></label>
                    <input type="text" id="nameInput" className="form-control" />
                </div>
                <p className='col-12 text-warning mb-0 p-3'><i>* </i>Là phần thông tin bắt buộc</p>
                <button className="btn btn-light font-weight-bold mx-3 mb-2">Start selecting</button>
            </div>
        )
    }
}

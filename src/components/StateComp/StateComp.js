import React, { useState } from 'react'
import './StateComp.scss';
import StateCompCon from '../StateCompCon/StateCompCon'

export default function StateComp() {

    // const [so, setSo] = useState(100);
    // const [inputValue, setInputValue] = useState(15);

    // const handleGiam = (giatri) => {
    //     setSo(value => value - giatri)
    // }

    // const handleTang = (giatri) => {
    //     setSo(value => Number.parseInt(value) + Number.parseInt(giatri))
    // }

    // const handleXoaGiatri = () => {
    //     setSo(0);
    // }

    // const handle2000 = () => {
    //     setSo(2000);
    // }


    // const handleChangeInput = (event) => {
    //     setInputValue(Number.parseInt(event.target.value))
    // }

    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(true);
    }

    const handleHidden = () => {
        setShow(false);
    }

    const classNames = show === true ? 'state__box' : 'state__box state__box--hidden'

    console.log('Render')

    return (
        <div className="state">
            {/* <h1>{so}</h1>
            <input type="number" value={inputValue} onChange={(event) => handleChangeInput(event)} />
            <button onClick={() => handleGiam(inputValue)}>Giảm</button>
            <button onClick={() => handleTang(inputValue)}>Tăng</button>
            <button onClick={handleXoaGiatri}>Xóa giá trị</button>
            <button onClick={handle2000}>Đến 2000</button> */}

            <div className={classNames}>
                <h1>BOXXXXXXXXXXXXXXXXXXXX</h1>
            </div>

            <button onClick={handleHidden}>Ẩn</button>
            <button onClick={handleShow}>Hiện</button>

            <StateCompCon />
        </div>
    )
}

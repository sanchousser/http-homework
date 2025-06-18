import { Component } from "react"

const Button = (onLoadMoreBtnClick) => {

    // handleBtnClick = (e) => {
    //     e.preventDefault()
    //     this.props.onLoadMoreBtnClick()
    // }


    return (<button type="button"
        style={{
            display: 'block',
            margin: '40px auto 0',
            padding: '10px 20px',
        }}
        onClick={onLoadMoreBtnClick}
    >
        Load more
    </button>)
}

export default Button;
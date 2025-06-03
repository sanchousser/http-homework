import { Component } from "react"

class Button extends Component {

    // handleBtnClick = (e) => {
    //     e.preventDefault()
    //     this.props.onLoadMoreBtnClick()
    // }


    render() {
        return (<button type="button"
            style={{
                display: 'block',
                margin: '40px auto 0',
                padding: '10px 20px',
            }}
            onClick={this.props.onLoadMoreBtnClick}
        >
            Load more
        </button>)
    }
}

export default Button;
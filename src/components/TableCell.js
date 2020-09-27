import React from 'react';

class TableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            priceCell: false
        };
        this.onPrice = this.onPrice.bind(this);
    }

    onPrice(event){
        const isPrice = event.target.id.split('_')[0] === 'price';
        if(isPrice){
            this.setState({
                priceCell: !this.state.priceCell
            })
            console.log(event);
        }
    }

    render(){
        return(
            <div className="column-cell column-header" id={this.props.id} onMouseLeave={this.onPrice} onMouseOver={this.onPrice}>
                {this.props.button ? <button>Buy</button> : this.props.title}
            </div>
        )
    }
}



export default TableCell;


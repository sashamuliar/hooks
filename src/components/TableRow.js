import React from 'react';
import TableCell from './TableCell';

class TableRow extends React.Component{
    constructor(props){
        super(props)
        this.onPrice = this.onPrice.bind(this);
    }

    onPrice(event){
        console.log(event.target)
    }
    
    render(){
        // const columnNames = ['Name', 'Author', 'Image', 'Descripion', 'Year', 'Price'];
        const rowCells = Object.keys(this.props.row).map((name, index, array) => {
            return <TableCell id={name + '_' + index} 
                key={ index } 
                onPrice={this.onPrice} 
                title={ this.props.row[name]} 
                priceCell={index === array.length - 1}/>
        })
        if (this.props.id){
            rowCells.push(
                <TableCell 
                key={ rowCells.length }
                button={ true }
                />
            )
        }
        return (
        <div className={this.props.id ? 'table-row' : 'table-row table-header'}>
            {rowCells}
        </div>
        )
    }
}


export default TableRow;
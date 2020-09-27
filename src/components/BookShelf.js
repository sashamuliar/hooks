import React from 'react';
import TableRow from './TableRow';

class BookShelf extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const columnNames = ['Name', 'Author', 'Image', 'Descripion', 'Year', 'Price', 'Buy'];
        const books = [
            {name: 'History book', author: 'Henry Viktory', image: '', description: 'nice book', year: '2002', price: '12$'},
            {name: 'Science book', author: 'Albert Einstein', image: '', description: 'nerd book', year: '2012', price: '19$'},
            {name: 'The Big Bang Book', author: 'Adam Soyer', image: '', description: 'If you know What I mean', year: '2005', price: '9$'},
            {name: 'Woman from Venus', author: 'Ann Brook', image: '', description: 'for girls', year: '1991', price: '21$'},
            {name: 'Ben\'s history ', author: 'Ben Vikery', image: '', description: 'not for children', year: '2002', price: '17$'},
            {name: 'Homo sapience', author: 'George Tacklberry', image: '', description: 'ancient book', year: '1171', price: '1112$'},
            {name: 'The being book', author: 'Torvald O\'Brien', image: '', description: 'dirt book', year: '1978', price: '32$'},
            {name: 'The Looper', author: 'Dave Okhard', image: '', description: 'thelooppa', year: '1898', price: '45$'},
            {name: 'Very good book', author: 'Henry Viktory', image: '', description: 'nice book', year: '2011', price: '12$'},
        ];
        const rows = [columnNames.reduce((result, col) => {
            result[col.toLowerCase()] = col;
            return result;
        }, {}), ...books];
        return (
        <div className="container">
            <h2>choose your book</h2>
            <div className="shelfBorder">
                { rows.map((row, index) => <TableRow id={ index } key={ index } row={ row }/>) }
            </div>
        </div>
        )
    }
}
export default BookShelf;
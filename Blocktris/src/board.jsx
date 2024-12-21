import './board.css'

const rows = 20;
const columns = 10;


function Board(){
    return (<div className='board'>
        {Array.from({length: rows}).map((_, i) => <div className='row {i}'>
            {Array.from({length: columns}).map((_,j)=> <div className='cell column {j}'></div>)}
        </div>)}
    </div>);
}
export default Board;
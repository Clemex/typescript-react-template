// Implements a tic-tac-toe board

import * as React from 'react';

//==
// Property interfaces

interface ISquareProps {
    onClick:()=>void; 
    style: React.CSSProperties;
    value: number;
};

interface IBoardProps {
    onClick:(pos: number)=>void; 
    rows: number,
    cols: number,
    values: Readonly<number[]>;
};

//==
// Board state 

type BoardState = { board: number[] };

//==
// Constants 

const rows = 100;
const cols = 100;

//==
// Helper functions

function valueToString(n:number) : string {
    return n == 0 ? '' : n == 1 ? 'x' : 'o';
}

function mapRange<T>(n:number, f: (i:number) => T): T[] {
    return Array.from(Array(n)).map((x, i) => f(i));
}

//==
// Component factories

function createSquare(pos: number, props: IBoardProps): React.ReactNode {
    return <Square 
            key={pos}
            onClick={() => props.onClick(pos)} 
            value={props.values[pos]}
            style={{width: 50}}
        />;
}

function createRow(n: number, cols: number, props: IBoardProps): React.ReactNode {
    return (
        <div key={n}>
            {mapRange(cols, (i) => createSquare(n * cols + i, props))}
        </div>
    );
}

//==
// Components
 
export const Square: React.SFC<ISquareProps> = (props: ISquareProps) => {
    return (
        <button 
            style={props.style} 
            onClick={e => props.onClick()}
        >
            [{valueToString(props.value)}]
        </button>
    );
}
export const Board: React.SFC<IBoardProps> = (props: IBoardProps) => {
    return (
        <div>
            {mapRange(props.rows, i => createRow(i, props.cols, props))}
        </div>
    );
}

export class Game extends React.Component<{}, BoardState> 
{
    state: BoardState = { board:Array(rows * cols).fill(0) };

    constructor(p: any) {
        super(p);
        this.click = this.click.bind(this);
    }

    click(n: number) {
        var st=this.state.board.slice();
        st[n] = (st[n]+1) % 3;
        this.setState({ board:st });
    }

    render() { 
        return (
            <Board 
                values={this.state.board} 
                onClick={this.click}
                rows={rows}
                cols={cols}
            />
        );
    }
}

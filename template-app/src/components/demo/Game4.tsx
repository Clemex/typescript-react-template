// Implements a tic-tac-toe board

import * as React from 'react';

//==
// Property types

type Identifiable = {
    id: string;
}

type Stylable = {
    style: React.CSSProperties;    
}

type SquareProps = Identifiable & Partial<Stylable> & {
    value: number;
    onClick: EventHandler;
};

type BoardProps = Identifiable & {
    rows: number,
    cols: number,
    values: Readonly<number[]>;
};

//==
// Constants 

const rows = 100;
const cols = 100;

//==
// Helper functions

function valueToString(n:number) : string {
    return n == 0 ? ' ' : n == 1 ? 'x' : 'o';
}

function mapRange<T>(n:number, f: (i:number) => T): T[] {
    return Array.from(Array(n)).map((x, i) => f(i));
}

//==
// Component factories

function createSquare(pos: number, props: BoardProps): React.ReactNode {    
    return (
        <Square
            id={props.id + ".square." + pos}
            key={props.id + ".square." + pos}
            value={props.values[pos]}
            onClick={handlers[pos]}
        />
    );
}

function createRow(n: number, cols: number, props: BoardProps): React.ReactNode {
    return (
        <div key={n}>
            {mapRange(cols, (i) => createSquare(n * cols + i, props))}
        </div>
    );
}

//==
// Event wr

interface EventHandler {
    (e:any): void;
}

interface HandlerTable {
    [id: string]: EventHandler;
}

const handlers: HandlerTable = {};

//==
// Components

export class Square extends React.PureComponent<SquareProps> 
{        
    // Render function 
    render(): React.ReactNode { 
        return (<button 
                style={this.props.style} 
                onClick={this.props.onClick}
            >
                [{valueToString(this.props.value)}]
            </button>);
    }
}    

export class Board extends React.PureComponent<BoardProps> 
{        
    // Render function 
    render(): React.ReactNode { 
        return (<div>
                {mapRange(this.props.rows, i => createRow(i, this.props.cols, this.props))}
            </div>);
    }
}    

export class Game extends React.PureComponent<{}> 
{
    state = { board:Array(rows * cols).fill(0) };

    constructor(p: any) {
        super(p);
        for (let i=0; i < this.state.board.length; ++i) {
            let _tmp = i;
            handlers[i] = (e) => {
                this.click(_tmp);
            }
        }
    }

    click(n: number) {
        var st=this.state.board.slice();
        st[n] = (st[n]+1) % 3;
        this.setState({ board:st });
    }

    render() { 
        return (
            <Board 
                id='Board'
                values={this.state.board} 
                rows={rows}
                cols={cols}
            />
        );
    }
}

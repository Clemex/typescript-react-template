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
// Components

interface EventHandler {
    (e:any): void;
}

interface HandlerTable {
    [id: string]: EventHandler;
}

const handlers: HandlerTable = {};

export const Square = wrap((props: SquareProps) => (
    <button 
        style={props.style} 
        onClick={props.onClick}
    >
        [{valueToString(props.value)}]
    </button>
));

export const Board = wrap((props: BoardProps) => (
    <div>
        {mapRange(props.rows, i => createRow(i, props.cols, props))}
    </div>
));

export interface RenderFunc<P> {
    (props: P) : React.ReactNode
}

export function wrap<P>(f: RenderFunc<P>): React.SFC<P>
{
    class PureSFC extends React.PureComponent<P> 
    {        
        // Pass in a function that renders from state to state
        constructor(p: P) {
            super(p);
        }
        
        // Render function 
        render(): React.ReactNode {
            return f(this.props);
        }
    }    
    return (props: P) => <PureSFC {...props}/>;
}

export class Game extends React.PureComponent<{}> 
{
    board = Array(rows * cols).fill(0);    

    constructor(p: any) {
        super(p);
        for (let i=0; i < this.board.length; ++i) {
            let _tmp = i;
            handlers[i] = (e) => {
                this.click(_tmp);
            }
        }
    }

    click(n: number) {
        var st=this.board.slice();
        st[n] = (st[n]+1) % 3;
        this.setState({ board:st });
    }

    render() { 
        return (
            <Board 
                id='Board'
                values={this.board} 
                rows={rows}
                cols={cols}
            />
        );
    }
}

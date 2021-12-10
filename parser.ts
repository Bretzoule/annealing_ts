import fs from 'fs';
const maxValue: number = 9999;

export default class Parser {
    matrix: number[][];

    constructor(fileName: string) {
        this.matrix = [];
        this.parser(fileName);
    }

    parser(fileName: string) {
        let dataFile: string = fs.readFileSync(fileName, 'utf-8');
        let mymatrix: number[];
        dataFile = dataFile.split('\n').slice(7, dataFile.split('\n').length - 2).join('\n');
        mymatrix = dataFile.split(" ").filter(item => item).map(x => parseInt(x))
        let j: number = mymatrix.reduce((n, x) => (n + ((x >= maxValue) ? 1 : 0)), 0);
        while(mymatrix.length) this.matrix.push(mymatrix.splice(0,j));
    }
}
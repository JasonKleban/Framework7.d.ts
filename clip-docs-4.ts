import * as clipboardy from 'clipboardy'

const rows = clipboardy.readSync();

const transformed = rows.split('\n')
    .map(row => {
        const cells = row.split('\t').map(cell => (cell || '').replace(/\n/g, ' ').trim());
        return `            /** ${cells[3]}.${ cells[2].length ? ` (default ${cells[2]})` : ''} */\n            ${cells[0]}${cells[2].length ? '?' : ''}: ${cells[1]}`;
    })
    .join('\n');

clipboardy.writeSync(transformed);

console.log(transformed);
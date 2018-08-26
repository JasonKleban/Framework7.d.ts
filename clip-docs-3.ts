import * as clipboardy from 'clipboardy'

const rows = clipboardy.readSync();

const transformed = rows.split('\n')
    .map(row => {
        const cells = row.split('\t').map(cell => (cell || '').replace(/\n/g, ' ').trim());
        return `            /** ${cells[2]} */\n            ${cells[0]} : ${cells[1]}`;
    })
    .join('\n');

clipboardy.writeSync(transformed);

console.log(transformed);
import * as fs from 'fs';
import { glob } from 'glob';

glob('lib/**/components/**/*.ts', {}, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const classPattern = /export declare class \w* implements m.Component<(\w*)>/;
    for (const path of files) {
        const src = fs.readFileSync(path, { encoding: 'utf8'});
        const match = classPattern.exec(src);
        if (match) {
            // TODO: Check this on unix
            const newLineIndex = src.indexOf('\r\n', match.index);

            // skip if already processed
            if (src.indexOf('public constructor', newLineIndex) !== -1) {
                continue;
            }

            const type = match[1];
            const newSrc = src.substring(0, newLineIndex + 2) + `    public constructor(_: ${type});` + src.substring(newLineIndex);

            fs.writeFileSync(path, newSrc);
        }
    }
})

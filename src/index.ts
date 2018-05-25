import { v4 } from 'uuid';
import * as _debug from 'debug';

const debug = _debug('test');

export function uuid(): string {
    debug('uuid!');
    return v4();
}

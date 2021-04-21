import {expectType} from 'tsd';
import widestLine from './index.js';

expectType<number>(widestLine('古\n\u001B[1m@\u001B[22m'));

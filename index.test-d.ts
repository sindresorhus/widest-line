import {expectType} from 'tsd-check';
import widestLine from '.';

expectType<number>(widestLine('古\n\u001B[1m@\u001B[22m'));

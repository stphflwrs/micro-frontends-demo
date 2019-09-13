import { FunctionComponent } from 'react';
import { Counter } from './react/counter';
import { SingleSpaFactory } from '../../_single-spa/single-spa-factory';
import { fromReact } from '../../_single-spa/from-react';


const asReact: FunctionComponent = Counter;
const asSingleSpa: SingleSpaFactory = fromReact(Counter);

export { asReact, asSingleSpa };

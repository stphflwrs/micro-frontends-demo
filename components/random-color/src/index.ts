import { RandomColor, RandomColorProps } from './react/random-color';
import { fromReact } from '../../_single-spa/from-react';
import { FunctionComponent } from 'react';
import { SingleSpaFactory } from '../../_single-spa/single-spa-factory';

const asReact: FunctionComponent<RandomColorProps> = RandomColor;
const asSingleSpa: SingleSpaFactory = fromReact(RandomColor);

export { asReact, asSingleSpa };

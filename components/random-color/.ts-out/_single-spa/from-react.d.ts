import { ComponentClass, FunctionComponent } from 'react';
import { SingleSpaFactory } from './single-spa-factory';
declare type ReactComponent = FunctionComponent | ComponentClass;
declare const fromReact: (component: ReactComponent) => SingleSpaFactory;
export { fromReact };

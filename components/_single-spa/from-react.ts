import React, { ComponentClass, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { LifeCycles } from 'single-spa';
import singleSpaReact from 'single-spa-react';
import { SingleSpaFactory } from './single-spa-factory';


type ReactComponent = FunctionComponent | ComponentClass;
const fromReact = (component: ReactComponent): SingleSpaFactory => {
  return (domGetterOrElementId: (() => Element) | string): LifeCycles => {
    let domQuery: () => Element;
    if (typeof domGetterOrElementId === 'string') {
      domQuery = () => document.getElementById(domGetterOrElementId)!;
    } else {
      domQuery = domGetterOrElementId;
    }

    return singleSpaReact({
      React,
      ReactDOM,
      rootComponent: component as any,
      domElementGetter: domQuery,
    });
  };
};

export { fromReact };

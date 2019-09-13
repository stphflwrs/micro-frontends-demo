import * as React from 'react';
interface ReactComponent {
    getReactComponent(): Function | React.Component;
}
interface SingleSpaComponent {
}
declare class Counter implements SingleSpaComponent, ReactComponent {
    getReactComponent(): Function;
}
export { Counter };

import { LifeCycles } from 'single-spa';
declare type SingleSpaFactory = (domGetterOrElementId: (() => Element) | string) => LifeCycles;
export { SingleSpaFactory };

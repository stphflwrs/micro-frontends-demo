import { LifeCycles } from 'single-spa';


type SingleSpaFactory = (domGetterOrElementId: (() => Element) | string) => LifeCycles;

export { SingleSpaFactory };

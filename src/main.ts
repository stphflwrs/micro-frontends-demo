import './vendor.ts';

import { ImportMapClient } from '@groupby/import-map-client';
import { registerApplication, start } from 'single-spa';

~async function main() {
  const client = new ImportMapClient({ protocol: 'http', path: 'localhost:9000', environment: 'local' }, document);
  await client.bootstrapApplication('demo');
  const { asSingleSpa: Counter } = await System.import('counter');
  const { asSingleSpa: RandomColor } = await System.import('random-color');

  registerApplication('counter', Counter('counter'), () => true);
  registerApplication('random-color', RandomColor('random-color'), () => true);
  start();
}();

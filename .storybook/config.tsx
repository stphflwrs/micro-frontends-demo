import { configure } from '@storybook/react';


const loadStories = () => {
  require('../components/counter/stories/counter.stories');
  require('../components/random-color/stories/random-color.stories');
};

configure(loadStories, module);

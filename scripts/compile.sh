#!/usr/bin/env bash
set -e

components=${1:-*}
for component_directory in components/${components}; do
  component=${component_directory##*/}

  yarn run webpack --context components/${component} --config components/${component}/webpack.config.js
done

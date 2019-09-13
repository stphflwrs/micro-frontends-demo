#!/usr/bin/env bash
set -e

components=${1:-*}
for component_directory in components/${components}; do
  component=${component_directory##*/}
  rm -rf components/${component}/dist
done

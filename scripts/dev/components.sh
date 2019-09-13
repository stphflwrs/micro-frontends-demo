#!/usr/bin/env bash
set -e

yarn run webpack-dev-server \
         --context components \
         --config .webpack/configs/components.webpack.config.js \
         --host "0.0.0.0" \
         --port "${COMPONENTS_PORT:-8081}"

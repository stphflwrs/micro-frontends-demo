#!/usr/bin/env bash
set -e

yarn run webpack-dev-server \
         --host "0.0.0.0" \
         --port "${APPLICATION_PORT:-8080}"

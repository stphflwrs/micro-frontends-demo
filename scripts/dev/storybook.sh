#!/usr/bin/env bash
set -e

yarn run start-storybook \
         --port "${STORYBOOK_PORT:-8082}" \
         --quiet

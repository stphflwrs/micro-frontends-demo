FROM node:dubnium
ENV STORYBOOK_PORT 8000

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY --chown=node . .
CMD yarn run dev:storybook

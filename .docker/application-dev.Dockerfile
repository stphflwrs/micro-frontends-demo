FROM node:dubnium
ENV APPLICATION_PORT 8080

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY --chown=node . .
CMD yarn run dev:application

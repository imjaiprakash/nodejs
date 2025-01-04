# FROM ubuntu

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs

##### OR ###############

# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
FROM node:lts AS development

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=dev
ENV NODE_ENV=$NODE_ENV

WORKDIR /code

# default to port 80 for node, and 9229 and 9230 (tests) for debug
ARG PORT=80
ENV PORT=$PORT
EXPOSE $PORT 9229 9230

COPY package-old.json /code/package.json
COPY ./db/MOCK_USER_DATA.json /code/MOCK_USER_DATA.json
COPY index.ts /code/index.js
COPY healthcheck.js /code/healthcheck.js

HEALTHCHECK --interval=30s \
  CMD node healthcheck.js

#############################

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
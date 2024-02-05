FROM node:18
WORKDIR /app
ARG PORT_BUILD=3000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
RUN yarn install
ENTRYPOINT yarn dev

# FROM dependencies as develop

# VOLUME  /app

# ENTRYPOINT ["sh"]
# CMD [ "/app/docker/dev/run.sh" ]
FROM node:20-alpine

RUN apk update && apk add --no-cache bash && rm -rf /var/cache/apk/*

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]

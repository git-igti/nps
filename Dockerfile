FROM node:10

RUN git clone https://github.com/Igorryan/api-nps-igti

WORKDIR /api-nps-igti

ARG POSTGRES_USER=non
ARG POSTGRES_HOST=non
ARG POSTGRES_PASSWORD=non

ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

RUN yarn

EXPOSE 3333

CMD ["yarn", "start"]
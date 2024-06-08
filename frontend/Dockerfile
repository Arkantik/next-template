FROM node:20.9.0-alpine3.17

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY src ./src
COPY public ./public
COPY .env ./.env
COPY tsconfig.json ./tsconfig.json
COPY next-env.d.ts ./next-env.d.ts
COPY next.config.mjs ./next.config.mjs
COPY postcss.config.mjs ./postcss.config.mjs
COPY tailwind.config.ts ./tailwind.config.ts

CMD npm run dev
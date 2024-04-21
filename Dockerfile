# Build
FROM node:20-alpine as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM node:20-alpine

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
WORKDIR /app

CMD ["node", "dist/main.js"]

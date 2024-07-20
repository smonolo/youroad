FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY package.json /app
RUN npm install --omit=dev

COPY --from=builder /app/dist /app/dist

COPY schema.prisma /app
RUN npx prisma@latest generate
RUN rm /app/schema.prisma

CMD ["node", "/app/dist/index.js"]
FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY . .

RUN npm install
RUN npx prisma generate
RUN npx turbo build

EXPOSE 8080

CMD ["node", "dist/index.js"]
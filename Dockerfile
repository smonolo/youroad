FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY apps/api .
COPY /home/ubuntu/dev/youroad/.env .

RUN npm ci
RUN npx prisma generate
RUN npx turbo build

EXPOSE 8080

CMD ["node", "dist/index.js"]
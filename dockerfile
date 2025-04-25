FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit && npm cache clean --force
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/ng-workshop-tenaris/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:16-alpine AS builder
WORKDIR /app
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm build

FROM nginx:latest AS prod
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/conf.d/default.conf ./etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
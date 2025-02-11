# Stage 1: Build Angular App
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . ./
RUN npm run build --prod

# Stage 2: Serve Angular App with Nginx
FROM nginx:1.23.3-alpine

COPY --from=build /app/dist/ui /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

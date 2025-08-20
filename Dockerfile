FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build 

FROM nginx:1.28-alpine
COPY --from=0 /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

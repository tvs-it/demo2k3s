FROM nginx:1.27-alpine
COPY index.html script.js /usr/share/nginx/html/
EXPOSE 80

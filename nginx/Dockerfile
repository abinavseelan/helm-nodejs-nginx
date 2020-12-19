FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx/maintenance.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
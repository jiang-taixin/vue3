FROM nginx

COPY dist/ /Users/taixin.jiang/Desktop/server

COPY nginx.conf /etc/nginx/nginx.conf

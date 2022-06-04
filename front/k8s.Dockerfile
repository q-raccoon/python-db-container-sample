FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN mv .product.env .env
RUN npm run build

FROM nginx
EXPOSE 80
COPY ./nginx.k8s.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# docker build -t pjt3591oo/cnn-client-tutorial:0.3 -f k8s.Dockerfile .
# pjt3591oo/cnn-client-tutorial:0.3 
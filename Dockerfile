# Build
FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_CONTACT_EMAIL
ARG VITE_LINKEDIN_URL
ARG VITE_GITHUB_URL
ARG VITE_WHATSAPP_URL

ENV VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL
ENV VITE_LINKEDIN_URL=$VITE_LINKEDIN_URL
ENV VITE_GITHUB_URL=$VITE_GITHUB_URL
ENV VITE_WHATSAPP_URL=$VITE_WHATSAPP_URL

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# Production
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
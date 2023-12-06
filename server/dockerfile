FROM node:18-alpine

# CREATE DIRECTORY
WORKDIR /app

# INSTALL DEPENDENCIES
COPY package*json ./

# Run npm install
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
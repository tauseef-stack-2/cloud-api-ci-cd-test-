# Start my container with node 20 lightweight Alpine linux
# so that containers get node 20 and linux os
FROM node:20-alpine   

# inside the container create the directory /app
WORKDIR /app

# copy package and package-lock files to ./app
COPY package*.json ./

# install dependencies in the container
RUN npm ci

# get our other project related files like sever.js
COPY . .

# expose the app on port 3000
EXPOSE 3000

# When we run the container, firstly this command executes  
CMD ["npm","start"]
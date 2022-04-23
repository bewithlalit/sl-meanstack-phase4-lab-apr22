# pull the image
FROM node:latest
# create the directory or folder in OS
RUN mkdir /usr/src/app
# point or refer to working directory
WORKDIR /usr/src/app
# copy package.json file in working directory
COPY package.json /usr/src/app
# install all dependencies in OS image 
RUN npm install
# copy app.js file in os image
COPY app.js /usr/src/app
# run the application
CMD [ "node", "app.js" ]
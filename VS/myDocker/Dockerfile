# Use the official Node.js slim image as the base image
FROM node:slim

# Set the working directory inside the container
WORKDIR /Myapp

# Copy the entire current directory (the source code) to the working directory in the container
COPY . /Myapp

# Run the "npm install" command to install dependencies for the application
RUN npm install

# Expose port 3000 to the outside world
EXPOSE 3000

# Set the command to run when the container starts
CMD node index.js

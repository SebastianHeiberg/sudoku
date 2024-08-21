# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /frontend

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 3000

# Start the development server
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
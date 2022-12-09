FROM node:18-slim

# Define the user of the image
# by default the user is root.
USER node

# Define the workdir
# Where the files of application will 
# be storaged. 
WORKDIR /home/node/app

# When we are in dev mode. We can keep the 
# container up with the read of null
CMD ["tail", "-f", "/dev/null"]





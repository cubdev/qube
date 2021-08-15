# Download MONGO db image
docker pull mongo

# Create a mongodata directory if not present, mkdir -p /mongodata

# Run Docker container
# -it – Provides an interactive shell to the Docker container.
# -v – Use this option to attach the /mongodata host volume to the /data/db container volume.
# -d – Starts the container as a background process.
# --name – Name of the container.
# -p - Port of the container
docker run -it -v mongodata:/data/db -p 27017:27017 --name mongodb -d mongo

# Mongo shell command, docker exec -it mongodb bash -> mongo -host localhost -port 27017


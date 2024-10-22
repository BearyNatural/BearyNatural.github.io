#!/bin/bash

# Bootstrap script to install and start Ollama on Linux

# Define variables
OLLAMA_VERSION="latest"  # Specify the version of Ollama if needed
INSTALL_DIR="$HOME/ollama"  # Directory to install Ollama
TAR_FILE="ollama-linux.tar.gz"  # Tarball filename
OLLAMA_BINARY_URL="https://ollama-public.s3.amazonaws.com/downloads/ollama-linux.tar.gz"  # URL to download Ollama

# Function to check if a command exists
command_exists() {
    command -v "$1" &> /dev/null
}

# Check if Ollama is already installed
if command_exists ollama; then
    echo "Ollama is already installed."
else
    # Create the installation directory if it doesn't exist
    mkdir -p $INSTALL_DIR

    # Download the Ollama binary
    echo "Downloading Ollama..."
    curl -L -o $TAR_FILE $OLLAMA_BINARY_URL

    # Extract the tarball to the installation directory
    echo "Extracting Ollama to $INSTALL_DIR..."
    tar -xzvf $TAR_FILE -C $INSTALL_DIR || { echo "Failed to extract Ollama. Please check the file format or the download URL."; exit 1; }

    # Add Ollama to the PATH
    echo "Adding Ollama to the PATH..."
    export PATH="$INSTALL_DIR:$PATH"
    echo "export PATH=\"$INSTALL_DIR:\$PATH\"" >> ~/.bashrc  # Add it to bashrc for persistence

    # Verify the installation
    if command_exists ollama; then
        echo "Ollama installed successfully."
    else
        echo "Failed to install Ollama. Please check for errors."
        exit 1
    fi

    # Clean up
    rm -f $TAR_FILE
fi

# Start the Ollama server
echo "Starting the Ollama server..."
nohup ollama start &

# Wait a few seconds to ensure the server starts
sleep 5

# Check if the Ollama server is running
if ollama list &> /dev/null; then
    echo "Ollama server is running."
else
    echo "Failed to connect to the Ollama server. Please check the logs or try starting the server manually using 'ollama start'."
    exit 1
fi

# Display Ollama version to confirm installation
echo "Ollama client version:"
ollama --version

echo "Ollama installation and setup are complete!"

# ghost-storage-imgur

Imgur storage adapter for Ghost.

## Installation

```bash
cd /path/to/your/ghost/installation
npm install ghost-storage-imgur
mkdir -p content/adapters/storage
cp -r node_modules/ghost-storage-imgur content/adapters/storage/ghost-storage-imgur
```

## Usage

Add the following to your configuration file and modify it accordingly.

```json
"storage": {
    "active": "ghost-storage-imgur",
    "ghost-storage-imgur": {
        "username": "<your username here>",
        "password": "<your password here>",
        "clientId": "<your client id here>"
    }
}
```

## License

[MIT](LICENSE.txt)

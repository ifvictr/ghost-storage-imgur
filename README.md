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

Here's a comprehensive list of configurations:

| **Name**   | **Required?** | **Description**                                                                                        | **Environment variable (prefixed with `GHOST_IMGUR_`)** |
|------------|---------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| `clientId` | yes           | Client ID associated with your Imgur account (obtained [here](https://api.imgur.com/oauth2/addclient)) | `CLIENT_ID`                                             |
| `password` | yes           | Your Imgur account password                                                                            | `PASSWORD`                                              |
| `username` | yes           | Your Imgur account username                                                                            | `USERNAME`                                              |

## License

[MIT License](LICENSE.txt)

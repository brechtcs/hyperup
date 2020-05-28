# hyperup

Upload files to a remote Hyperdrive daemon

## Install

```
$ npm i -g hyperup
```

## Usage

Start by defining a `~/.hyperup` file containing the configuration of your remote Hyperdrive daemon:

```json
{
  "endpoint": "example.com:3101",
  "token": "<access-token>"
}
```

Then invoke the command as follows:

```
$ hyperup path/to/file.txt <drive-key>
```

## License

Apache-2.0

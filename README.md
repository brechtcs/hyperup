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

When that's done, you should be able to use the command.

```
$ hyperup --help
Hyperup, version 1.0.0
Daemon endpoint: example.com:3101

Usage: hyperup [options] <file-or-directory> [hyperdrive-key]
--ignore, -i    Files or directories to ignore
--help, -h      Display help information
```

## License

Apache-2.0

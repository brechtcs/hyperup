# hyperup

Upload files to a remote Hyperdrive daemon

## Install

```
$ npm i -g hyperup
```

## Use

Start by defining a `~/.hyperup` file containing the configuration of your remote Hyperdrive daemon:

```json
{
  "endpoint": "example.com:3101",
  "token": "<access-token>"
}
```

When that's done, you should be able to start using the command.

```
$ hyperup --help
Hyperup, version 1.0.0
Daemon endpoint: example.com:3101

Usage: hyperup [options] <file-or-directory> [hyperdrive-url]
--ignore, -i    Files or directories to ignore
--help, -h      Display help information

$ hyperup /path/to/file hyper://abc..10

$ hyperup --ignore .git --ignore node_modules /path/to/dir
Created hyper://123..fe
```

## License

Apache-2.0

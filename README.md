## Getting started
How2 (or just how) is a cli tool to help you better communicate with the repository.
To develop locally:
```sh
  yarn
  yarn watch
  # in another shell session
  ./dist/index.js
```

## Deployment
To publish to npm commit changes and do
```sh
  # commit and push your changes
  npm version patch # or minor/release
  npm publish
```

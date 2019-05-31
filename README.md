# apollo-server-express-example

_A boilerplate for building Express-backed GraphQL servers with best practices and tooling._

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


### Generators

We use the awesome [hygen](http://www.hygen.io/) generator to automatically create components, stories and tests.

The generators live alongside this project in the `/_templates` folder. The available generators are:

```bash
```

## Contributing

### Committing

This project uses [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) and as such, has specific committing guidelines. **Your commit will be rejected if you do not adhere to these guidelines.**

For the smoothest development experience, once your code is staged, commit with:

```bash
npm run commit
```

This will trigger [commitizen](https://github.com/commitizen/cz-cli) to help you write effective, compliant commit messages.

### Releases

We use [semantic-release](https://github.com/semantic-release/semantic-release) to manage GitHub and NPM releases. The `semantic-release` commands will automatically generate tags, releases, and a [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) CHANGELOG with one command.

The releases will happen in response to merged PRs on this Repo and should not be triggered locally.

**If you know what you're doing** and really want to trigger a release to GitHub and NPM on your local machine, you can run:

```bash
npm run release -- --no-ci
```

You'll notice that we do not have to specify the specific type of version upgrade `(patch|minor|major)`. Semantic-release will automatically parse our conventional commit messages and generate the proper semantic version upgrade for us.

## License

MIT © [masiamj](https://github.com/masiamj)

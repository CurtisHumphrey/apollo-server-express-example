# apollo-server-express-example

_A boilerplate for building Express-backed GraphQL servers with best practices and tooling._

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Contributing

### Generators

We use the awesome [hygen](http://www.hygen.io/) generator to automatically create domain modules.

The generators live in this project in the `/_templates` folder. The available generators are:

```bash
npm run generate:module
```

### Committing

This project uses [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) and as such, has specific committing guidelines. **Your commit will be rejected if you do not adhere to these guidelines.**

For the smoothest development experience, once your code is staged, commit with:

```bash
npm run commit
```

This will trigger [commitizen](https://github.com/commitizen/cz-cli) to help you write effective, compliant commit messages.

### Tests

#### Development

Running the tests is super simple! There's only a couple things you need to do.

First, make sure the server is running:

```bash
# Make sure the server is running
npm run develop
```

Then, in a separate terminal, run one of these scripts:

```bash
# Run the tests once (for CI)
npm run test

# Run the tests in watch mode (for development)
npm run test:watch
```

### Releases

We use [semantic-release](https://github.com/semantic-release/semantic-release) to manage GitHub and NPM releases. The `semantic-release` commands will automatically generate tags, releases, and a [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) CHANGELOG with one command.

The releases will happen in response to merged PRs on this Repo and should not be triggered locally.

**If you know what you're doing** and really want to trigger a release to GitHub and NPM on your local machine, you can run:

```bash
npm run release -- --no-ci
```

You'll notice that we do not have to specify the specific type of version upgrade `(patch|minor|major)`. Semantic-release will automatically parse our conventional commit messages and generate the proper semantic version upgrade for us.

### Analytics

We use [Apollo Engine](https://www.apollographql.com/docs/references/apollo-engine/) for analytics. It's super cool. We generally only use two commands from the [Apollo CLI](https://www.npmjs.com/package/apollo) with this project.

There's a couple things you have to do to get started using Engine for analytics.

1. [Register](https://engine.apollographql.com) for an account (obviously)
2. Add your `ENGINE_API_KEY` to the `.env` file in the root of this repo. See `.env.example` for an example of what `.env` should look like. _NOTE: Do not check your `.env` file into source control._
3. Ensure your server is running with `npm run develop`

Then you can run the following commands:

```bash
# Check for breaking changes in your latest development schema version
npm run service:check -- --endpoint=http://localhost:3000/graphql

# Push your latest schema to the registry
npm run service:push -- --endpoint=http://localhost:3000/graphql
```

## Todo

- [ ] Add automatic service checks and push as CI step
- [x] Fix generator errors
- [ ] Deploy example project

## License

MIT © [masiamj](https://github.com/masiamj)

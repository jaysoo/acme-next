This is an example of fixing babel config setup to work with Next.js apps.

See these files:

- `babel.config.json` (removed presets)
- `apps/demo/next.config.js` (enabled upward mode for monorepo support)
- `libs/test-lib/.babelrc` (added web preset since we removed it from the root)

Now you can run `nx serve demo` and it should comile styled-components correctly.

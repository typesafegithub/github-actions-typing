# GitHub Actions typing

Bring type-safety to your GitHub actions' API!

This is a GitHub action that validates your action's type specs (`action-types.y(a)ml`) and ensures the inputs and
outputs have types set according to a certain specification.

To see which actions already provide typings using this schema, click [here](https://github.com/krzema12/github-actions-typing/network/dependents).

# Example

Let's say your action has such manifest (`action.yml`):

```yaml
name: My cool action
description: Just to showcase GitHub Actions typing
inputs:
  verbose:
    description: 'Set to true to display debug information helpful when troubleshooting issues with this action.'
    required: false
    default: 'false'
  log-level:
    description: 'Specify the level of details for logging.'
    required: true
  permissions:
    description: 'Who should have access.'
runs:
  using: 'node16'
  image: 'dist/main.js'
```

and such `action-types.yml` next to it:

```yaml
inputs:
  verbose:
    type: boolean
  permissions:
    type: inttteger
```

This action, once used within a workflow, will fail the workflow run and produce such output:

![Example output](docs/ExampleOutput.png)

# Usage

Create a new file in your action repo's root directory: `action-types.yml`, then specify types for your
action's inputs and outputs. See _"Available types"_ section below.

Finally, create a workflow in your actions' repository that will simply call this action to validate the types:

```yaml
name: Validate action typings

on:
  push: [main]
  pull_request:
  workflow_dispatch:

jobs:
  validate-typings:
    runs-on: "ubuntu-latest"
    steps:
      - uses: actions/checkout@v3
      - uses: krzema12/github-actions-typing@v0
```

## Available types

### String

A text value.

Example:

```yaml
...
inputs:
  name:
    type: string
    ...
```

### Boolean

Can be `true` or `false`.

Example:

```yaml
...
inputs:
  verbose:
    type: boolean
    ...
```

### Integer

A number without a fractional component.

Example:

```yaml
...
inputs:
  retries:
    type: integer
    ...
```

In case of "magic values" meaning something else that the user would expect, you can specify them like so:

```yaml
...
inputs:
  fetch-depth:
    type: integer
    named-values:
      infinite: 0
    ...
```

### Float

A number with a fractional component.

Example:

```yaml
...
inputs:
  threshold:
    type: float
    ...
```

### List

A sequence of values.

Because string is used as a data type for passing inputs to actions, a separator string has to be
specified as well. This is usually a new line or a comma.

Lists can contain values of any primitive or enum type.

Examples:

```yaml
...
inputs:
  input-files:
    type: list
    separator: ','
    list-item:
      type: string
  ...
```

```yaml
...
inputs:
  granted-scopes:
    type: list
    separator: ','
    list-item:
      type: enum
      allowed-values:
        - read
        - write
  ...
```

### Enum

Multiple possible values.

Example:
```yaml
...
inputs:
  permissions:
    type: enum
    allowed-values:
      - user
      - admin
      - guest
    ...
```

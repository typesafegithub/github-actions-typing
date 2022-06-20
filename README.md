# Work in progress! Not ready for usage.

---

# GitHub Actions typing

Bring type-safety to your GitHub actions' API!

This is a GitHub action that validates your action's manifest (action.y(a)ml) and ensures the inputs and outputs have
types set according to a certain specification.

# Example

Let's say your action has such manifest:

```yaml
name: My cool action
description: Just to showcase GitHub Actions typing
typingSpec: krzema12/github-actions-typing@v0.1
inputs:
  verbose:
    description: 'Set to true to display debug information helpful when troubleshooting issues with this action.'
    required: false
    default: 'false'
    type: boolean
  log-level:
    description: 'Specify the level of details for logging.'
    required: true
  permissions:
    description: 'Who should have access.'
    type: inttteger
runs:
  using: 'node16'
  image: 'dist/main.js'
```

This action, once used within a workflow, will fail the workflow run and produce such output:

![Example output](docs/ExampleOutput.png)

# Usage

Create a workflow in your actions' repository that will simply call this action:

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
          with:
            verbose: true
```

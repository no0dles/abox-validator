# abox-validator - Api Toolkit Validations
[![Build Status](https://travis-ci.org/no0dles/abox-validator.svg?branch=master)](https://travis-ci.org/no0dles/abox-validator)
[![npm version](https://badge.fury.io/js/abox-validator.svg)](https://badge.fury.io/js/abox-validator)
[![codecov.io](http://codecov.io/github/no0dles/abox-validator/coverage.svg?branch=master)](http://codecov.io/github/no0dles/abox-validator?branch=master)

## Quickstart

### Installation
```
npm install abox-validator --save
```

### Code Example
action.ts
```typescript
import {Action} from "abox";
import {Pattern, Required} from "abox-validator";

@Action({ name: "ping" })
export class Ping {
  @Required()
  @Pattern(/^[a-z]$/)
  public message: string
}
```

app.ts
```typescript
import {Api} from "abox";
import * as validator from "abox-validator";
import {Ping} from "./actions";

const api = new Api();

api.use(validator.module);

api
  .on(Ping)
  .handle((context, data) => {
    //...
  });

export = api;
```

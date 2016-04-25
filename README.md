# IndustryException [![Build Status](https://travis-ci.org/invrs/industry-exception.svg?branch=master)](https://travis-ci.org/invrs/industry-exception)

Pretty error logging for StandardIO functions.

## Usage

```js
import { factory } from "industry"
import { exception } from "industry-exception"
import { functions } from "industry-functions"
import { instance } from "industry-instance"
import { standard_io } from "industry-standard-io"

class Test {
  hello() {
    throw "world"
  }
}

let test = factory(Test)
  .set("exception", exception)
  .set("functions", functions)
  .set("instance", instance)
  .set("standard_io", standard_io)

test.hello()
```

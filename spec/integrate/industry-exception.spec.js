import { factory } from "industry"
import { functions } from "industry-functions"
import { instance } from "industry-instance"
import { standard_io } from "industry-standard-io"
import { exception } from "../../"

describe("exception", () => {
  let test

  function makeTest(id) {
    return factory()
      .set("exception", exception)
      .set("functions", functions)
      .set("instance", instance)
      .set("standard_io", standard_io)
      .base(class {
        hello() {
          throw "world"
        }
      })
  }

  beforeEach(() => {
    test = makeTest()
  })

  it("prints nice error", () => {
    test.hello()
  })
})

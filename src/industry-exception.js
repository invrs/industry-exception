import PrettyError from "pretty-error"
let pe = new PrettyError()

export let exception = Class =>
  class extends Class {
    exception({ e }) {
      console.log(pe.render(e))
    }
  }

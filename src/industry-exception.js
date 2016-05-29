import PrettyError from "pretty-error"
let pe = new PrettyError()

export let exception = Class =>
  class extends Class {
    static beforeFactoryOnce() {
      this.industry({
        ignore: { instance: [ "exception" ] }
      })
      super.beforeFactoryOnce()
    }

    exception({ e }) {
      console.log(pe.render(e))
    }
  }

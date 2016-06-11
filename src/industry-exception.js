let pe

if (typeof document == "undefined") {
  let PrettyError = require(`${""}pretty-error`)
  pe = new PrettyError()
}

export let exception = Class =>
  class extends Class {
    static beforeFactoryOnce() {
      this.industry({
        ignore: { instance: [ "exception" ] }
      })
      super.beforeFactoryOnce()
    }

    exception({ e }) {
      if (typeof document == "undefined") {
        console.log(pe.render(e))
      }
    }
  }

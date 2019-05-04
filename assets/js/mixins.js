const baseInput = {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    hint: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}

export { baseInput }

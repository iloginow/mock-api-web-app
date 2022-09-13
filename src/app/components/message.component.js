import { h } from 'vue';

import '../../css/message.css';

export default {
  name: 'message',
  props: {
    text: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      default: 'info',
    },
  },
  render() {
    return h('p', { class: `card message-${this.severity}` }, [
      h('span', { class: 'card-header' }, this.text),
    ]);
  },
};

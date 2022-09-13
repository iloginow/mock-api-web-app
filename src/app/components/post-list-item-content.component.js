import { h } from 'vue';

export default {
  name: 'post-list-item-content',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    maxChars: {
      type: Number,
      default: 120,
    },
  },
  methods: {
    cutText(text) {
      return `${text.substring(0, this.maxChars)}...`;
    },
  },
  computed: {
    computedTitle() {
      return this.title.length > this.maxChars
        ? this.cutText(this.title)
        : this.title;
    },
    computedBody() {
      return this.body.length > this.maxChars
        ? this.cutText(this.body)
        : this.body;
    },
  },
  render() {
    return h('div', { class: 'card-body post-list-item-content' }, [
      h('h2', { class: 'post-list-item-content-title' }, this.computedTitle),
      h('p', { class: 'post-list-item-content-body' }, this.computedBody),
    ]);
  },
};

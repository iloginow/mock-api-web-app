import { h } from 'vue';

export default {
  name: 'post-list-skeleton-item',
  props: {
    lineCount: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    getLineWidth(i) {
      switch (i) {
        case 0: return 90;
        case this.lineCount - 1: return 30;
        default: return 80;
      }
    },
  },
  render() {
    return h('div', { class: 'card' }, [
      h('div', { class: 'card-body' }, h('div', { class: 'ssc-line' })),
      h('div', { class: 'card-body' }, [
        h('div', { class: 'ssc-head-line mb w-40' }),
        ...Array.from({ length: this.lineCount })
          .map((_, i) => h('div', { class: `ssc-line w-${this.getLineWidth(i)}` })),
      ]),
    ]);
  },
};

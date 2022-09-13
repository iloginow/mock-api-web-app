import { h } from 'vue';
import { mapActions } from 'vuex';

export default {
  name: 'post-list-item-header',
  props: {
    id: {
      type: Number,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
    selectedAt: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      selectPost: 'topRated/selectPost',
      deselectPost: 'topRated/deselectPost',
    }),
    toggleSelection() {
      if (this.isSelected) this.deselectPost(this.id);
      else this.selectPost(this.id);
    },
  },
  render() {
    return h('div', { class: 'card-header post-list-item-header' }, [
      h('span', { class: 'post-list-item-header-controls' }, [
        h('span', { class: 'post-list-item-header-id' }, `#${this.id}`),
        h('span', { innerHTML: '&nbsp' }),
        h('input', {
          id: `post-list-item-checkbox-${this.id}`,
          type: 'checkbox',
          checked: this.isSelected,
          onChange: this.toggleSelection,
        }),
        h('span', { innerHTML: '&nbsp' }),
        h('label', {
          class: [
            'post-list-item-header-checkbox-label',
            { 'post-list-item-header-checkbox-label-selected': this.isSelected },
          ],
          for: `post-list-item-checkbox-${this.id}`,
        }, 'Top rated'),
        h('span', { innerHTML: '&nbsp' }),
      ]),
      this.selectedAt
        ? h('span', { class: 'post-list-item-header-selected-at' }, `Selected at: ${this.selectedAt}`)
        : '',
    ]);
  },
};

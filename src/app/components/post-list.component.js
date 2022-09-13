import { h } from 'vue';
import PostListItem from './post-list-item.component';

import '../../css/post-list.css';

export default {
  name: 'post-list-component',
  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },
  render() {
    return h('ul', { class: 'post-list' }, this.listItems
      .map((item) => h(PostListItem, {
        id: item.id,
        title: item.title,
        body: item.body,
      })));
  },
};

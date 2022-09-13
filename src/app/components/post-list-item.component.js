import { h } from 'vue';
import { mapGetters } from 'vuex';
import PostListItemHeader from './post-list-item-header.component';
import PostListItemContent from './post-list-item-content.component';

import '../../css/post-list-item.css';

export default {
  name: 'post-list-item',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      selectedPosts: 'topRated/selectedPostsEEST',
    }),
    selectedPostsMatch() {
      return this.selectedPosts.find((post) => post.id === this.id);
    },
    isSelected() {
      return !!this.selectedPostsMatch;
    },
    selectedAt() {
      return this.isSelected ? this.selectedPostsMatch.selectedAt : '';
    },
  },
  render() {
    return h('li', { class: 'card post-list-item' }, [
      h(PostListItemHeader, {
        id: this.id,
        isSelected: this.isSelected,
        selectedAt: this.selectedAt,
      }),
      h(PostListItemContent, {
        title: this.title,
        body: this.body,
      }),
    ]);
  },
};

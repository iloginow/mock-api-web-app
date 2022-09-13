import { h } from 'vue';
import { mapActions } from 'vuex';
import { getPosts } from '../../providers/api.provider';
import PostListSkeleton from '../components/post-list-skeleton.component';
import Message from '../components/message.component';
import PostList from '../components/post-list.component';

import '../../css/main-view.css';
import '../../css/cards.css';

export default {
  name: 'post-list-view',
  data() {
    return {
      posts: [],
      isLoading: true,
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions({
      init: 'topRated/init',
      setTotalPostsCount: 'topRated/setTotalPostsCount',
    }),
    async setPosts() {
      this.isLoading = true;
      try {
        this.posts = await getPosts();
        this.setTotalPostsCount(this.posts.length);
      } catch (err) {
        this.errorMessage = err.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    postsSortedByTitleAsc() {
      return this.posts.sort((a, b) => a.title.localeCompare(b.title));
    },
    content() {
      if (this.isLoading) return h(PostListSkeleton);
      if (this.errorMessage) return h(Message, { text: this.errorMessage, severity: 'error' });
      if (!this.posts.length) return h(Message, { text: 'The post list is empty' });
      return h(PostList, { listItems: this.postsSortedByTitleAsc });
    },
  },
  created() {
    this.init();
  },
  mounted() {
    this.setPosts();
  },
  render() {
    return h('main', { class: 'app-main-view post-list-view' }, this.content);
  },
};

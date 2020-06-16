export const backTopMixin = {
    data() {
        return {
            isShowToTop: false
        }
    },
    methods: {
        // 返回顶部
        scrollTo() {
            this.$refs.scroll.scrollTo(0, 0, 600);
        },
        // 监听滚动组件的滚动事件
        scroll(position) {
            // 判断滚动距离是否大于1000
            this.isShowToTop = -position.y > 600 ? true : false;
        }
    }
}
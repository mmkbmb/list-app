<template>
<div>
    <div v-for="p in filteredPosts" v-bind:key="p.id">
        <div>
            ID: {{ p.id }}、タイトル : {{ p.title }}
        </div>
    </div>
    <div>
        <button type="button" @click="prevPage">前へ</button>
        {{ pagination.page }}ページ目
        <button type="button" @click="nextPage">次へ</button>
    </div>
</div>
</template>

<script>

    import { ref, computed, watch, onMounted } from 'vue'
    import pagination from '../components/pagination'

    export default {
        setup() {

            // data
            const posts = ref([]);

            // methods
            const prevPage = () => {
                return pagination.page--;
            };
            const nextPage = () => {
                return pagination.page++;
            };
            const getPosts = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(data => {
                        posts.value = data;
                    });
            };
            // computed
            const filteredPosts = computed(() => {

                let filteredPosts = [];
                const start = (pagination.page - 1) * pagination.limit;
                const end = start + pagination.limit;

                for(let i = start ; i < end ; i++) {
                    if(posts.value[i] !== undefined) {
                        filteredPosts.push(posts.value[i])
                    }
                }
                return filteredPosts;
            });
            // watch
            watch(posts, () => {
                console.log('postsが変更されました');
            });
            // mounted
            onMounted(() => {
                getPosts();
            });
            return {
                posts,
                pagination,
                prevPage,
                nextPage,
                filteredPosts
            }
        }
    }
</script>
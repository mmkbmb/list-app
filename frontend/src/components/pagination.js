import { reactive } from 'vue'

export default reactive({
    page: 1,  // 現在のページ
    limit: 10 // 10件ずつ表示
});

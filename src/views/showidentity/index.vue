<template>
    <div>
<List :data="listData"></List>
    </div>
</template>

<script>
import List from '@/components/List'
    export default {
        components:{
            List
        },
        data(){
            return{
                listData:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=5').then(res=>{
                    if(res.code == 1){
                        this.listData = res.rows
                    }
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>

</style>
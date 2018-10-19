<template>
    <div>
<Header></Header>
<List :data="listData"></List>
<Tabbar></Tabbar>
    </div>
    <!-- 不需要用的view，只是为了留着看父子传值 -->
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Tabbar from '@/components/Tabbar'
    export default {
        components:{
            Header,List,Tabbar
        },
        data(){
            return{
                listData:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=5').then(res=>{
                    if(res.code==1){
                        this.listData=res.rows
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
<template>
    <div>
<Header></Header>
<List :data="listData"></List>
<Tabbar></Tabbar>
    </div>
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
                this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res=>{
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
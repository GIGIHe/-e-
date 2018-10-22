<template>
    <div>
<Header></Header>
<div class="btn-wrap fz-20 cl-w">
    <div class="personal-conclusion" @click="conclusion">个人总结</div>
    <div class="command" @click="command">民主评议</div>
</div>
    </div>
</template>

<script>
    export default {
        methods:{
            conclusion(){
 this.$router.push('/summary')
            },
            command(){
this.$router.push('/discuss')
            }
        }
    }
</script>

<style scoped lang = "scss">
.btn-wrap{
    width: 7.5rem;
    margin-top: 200px;
    .personal-conclusion,
    .command{
        width: 3.95rem;
        background-color: #c50206;
        height: 57px;
        line-height: 57px;
        text-align: center;
        margin: 0 auto 20px;
        border-radius: 4px;
}
}
</style>
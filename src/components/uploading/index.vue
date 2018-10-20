<template>
    <div>
<label for="update" class="upload-wrap">
    <input type="file" class="upload" style='display:none' id="update" @change="handle">
</label>
    </div>
</template>

<script>
    export default {
        methods:{
            handle($event){
                console.log($event);
            }
        }
    }
</script>

<style scoped>
.upload-wrap{
    display: block;
    width: 0.9836rem;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 40px;
    border: 1px solid #eeeeee;
}
</style>
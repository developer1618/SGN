<template>
    <div>
        
    </div>
</template>
<script>
export default{
    layout:"chat",
    middleware:"consultant",
    created(){
        this.$router.push("/consultant/consultations");
    }
}
</script>
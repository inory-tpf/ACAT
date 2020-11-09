<template>
    <div class="main">
        <bear v-if="msg.id == 1" :msg="msg"></bear>
        <java v-if="msg.title1 == 'JAVA'" :msg="msg"></java>
        <go v-if="msg.title1 == 'GO'" :msg="msg"></go>
        <fwd v-if="msg.id == 2" :msg="msg"></fwd>
        <jqxx v-if="msg.id == 4" :msg="msg"></jqxx>
    </div>
</template>

<script>
import bear from "../各组首屏/qd-bear";
import java from "../各组首屏/java";
import go from "../各组首屏/go";
import fwd from "../各组首屏/fwd";
import jqxx from "../各组首屏/jqxx";
export default {
    data() {
        return {};
    },
    components: {
        bear,
        java,
        go,
        fwd,
        jqxx,
    },
    props: ["msg"],
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-color: #ccc;
}
</style>
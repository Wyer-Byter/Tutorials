<template>
    <div>
        <div class="row">
            <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components: {
        appQuote: Quote 
    },
    methods: {
        deleteQuote(index) {
            this.$emit('deleteQuote', index);
        }
    }
}
</script>

<style>

</style>

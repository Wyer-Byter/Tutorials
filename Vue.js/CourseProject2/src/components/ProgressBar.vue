<template>
    <div class="row">
        <div class="col-xs-12">
            <h1>Quotes Added</h1>
            <div class="progress">
                <div class="progress-bar" 
                    style="background-color: green; margin: 0; color: white;" 
                    :style="{width: (quoteCount / quoteMax) * 100 + '%'}">
                    {{ quoteCount }} / {{ quoteMax}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount', 'quoteMax']
    }
</script>

<style>
</style>

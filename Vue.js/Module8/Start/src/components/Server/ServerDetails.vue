<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Select server to view.</p>
        <p v-else>Server #{{ server.id }} Status {{ server.status }} </p>
        <button @click="statusReset">Change to Normal</button>
    </div>

</template>

<script>
    import { eventBus } from "../../main.js";

    export default {
        data: function() {
            return {
                server: null
            };
        },
        methods: {
            statusReset() {
                this.server.status = 'Normal';
            }
        },
        created() {
            eventBus.$on('serverClicked', (server) => {
                this.server = server;
            })
        }
    }
</script>

<style>

</style>

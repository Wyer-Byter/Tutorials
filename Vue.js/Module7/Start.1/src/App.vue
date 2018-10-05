<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-details></app-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue'
    import Footer from './components/Shared/Footer.vue'
    import ServerStatuses from './components/Server/ServerStatuses.vue'
    import ServerDetails from './components/Server/ServerDetails.vue'

    export default {
        components: {
            'app-header': Header,
            'app-servers': ServerStatuses,
            'app-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style></style>

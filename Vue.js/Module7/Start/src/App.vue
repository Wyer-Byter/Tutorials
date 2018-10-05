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
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import ServerStatuses from './ServerStatuses.vue'
    import ServerDetails from './ServerDetails.vue'

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

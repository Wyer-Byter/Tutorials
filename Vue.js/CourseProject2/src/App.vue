<template>
    <div class="container">
        <app-progress-bar :quote-count="quotes.length" :quote-max="maxQuotes"></app-progress-bar>
        <app-quote-input @addQuote="addQuote"></app-quote-input>
        <app-quote-list :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-list>
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue';
    import QuoteInput from './components/Input.vue';
    import QuoteList from './components/QuoteList.vue';

    export default {
        data: function() {
            return {
                quotes: ['Sample quote.'],
                maxQuotes: 10 
            }
        },
        components: {
            appProgressBar: ProgressBar,
            appQuoteInput: QuoteInput,
            appQuoteList: QuoteList
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                   return alert('Please delete Quotes first');
                } else {
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>

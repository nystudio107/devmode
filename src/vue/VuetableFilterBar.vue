<template>
    <div class="filter-bar">
        <div class="pb-4">
            <div class="text-center">
                <input type="text"
                       v-model="filterText"
                       class="text-xl rounded-full p-2 text-center text-devmode-pink devmode-container"
                       @keyup="doFilter"
                       placeholder="search"
                >
                <button class="btn delete icon hidden" @click="resetFilter">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                filterText: '',
            }
        },
        methods: {
            doFilter () {
                this.$events.fire('filter-set', this.filterText);
            },
            resetFilter () {
                this.filterText = '';
                this.$events.fire('filter-reset');
            }
        }
    }
</script>

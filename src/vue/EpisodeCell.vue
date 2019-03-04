<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ summary }}</p>
    </div>
</template>
<script>
    export default {
        name: 'episode-cell',
        props: {
            title: String,
            summary: String,
        },
    }
</script>

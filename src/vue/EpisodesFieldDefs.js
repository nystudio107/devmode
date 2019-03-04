// Field definitions for EpisodesTable.vue
export default [
    {
        name: '__slot:episode-display',
        sortField: 'title',
        title: 'Episode',
        titleClass: 'center pageListingDisplay',
        dataClass: 'center',
        width: '80%',
    },
    {
        name: 'summary',
        visible: false,
    },
    {
        name: 'postDate',
        sortField: 'craftDbCnt',
        title: 'Date',
        titleClass: 'text-right',
        dataClass: 'text-right',
        width: '9%',
    },
];

<template>
    <div class="w-full bg-transparent">
        <vuetable-filter-bar></vuetable-filter-bar>
        <div class="vuetable-pagination clearfix px-2 md:px-0">
            <vuetable-pagination-info ref="paginationInfoTop"
                                      infoTemplate="Displaying {from} to {to} of {total} episodes"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="paginationTop"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
        <div class="overflow-x-auto overflow-y-hidden">
            <vuetable ref="vuetable"
                      api-url="/actions/site-module/site/episodes"
                      :per-page="10"
                      :fields="fields"
                      :css="css"
                      :sort-order="sortOrder"
                      :append-params="moreParams"
                      @vuetable:pagination-data="onPaginationData"
                      @vuetable:row-clicked="onRowClicked"
                      @vuetable:loaded="onLoaded"
            >
                <template slot="episode-display" slot-scope="props">
                    <episode-cell :title="props.rowData.title"
                                  :url="props.rowData.url"
                                  :post-date="props.rowData.postDate"
                                  :episode-number="props.rowData.episodeNumber"
                                  :summary="props.rowData.summary"
                    >
                    </episode-cell>
                </template>
            </vuetable>
        </div>
        <div class="vuetable-pagination clearfix px-2 md:px-0">
            <vuetable-pagination-info ref="paginationInfo"
                                      infoTemplate="Displaying {from} to {to} of {total} episodes"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import FieldDefs from './EpisodesFieldDefs.js';

    // Our component exports
    export default {
        components: {
            'vuetable': () => import(/* webpackChunkName: "vuetable" */ './Vuetable.vue'),
            'vuetable-pagination': () => import(/* webpackChunkName: "vuetablepagination" */ './VuetablePagination.vue'),
            'vuetable-pagination-info': () => import(/* webpackChunkName: "vuetablepaginationinfo" */ './VuetablePaginationInfo.vue'),
            'vuetable-filter-bar': () => import(/* webpackChunkName: "vuetablefilterbar" */ './VuetableFilterBar.vue'),
            'episode-cell': () => import(/* webpackChunkName: "episodecell" */ './EpisodeCell.vue'),
        },
        props: {
        },
        data: function() {
            return {
                moreParams: {
                    'filter': '',
                },
                css: {
                    tableClass: 'data fullwidth webperf-pages-index',
                    ascendingIcon: 'menubtn webperf-menubtn-asc',
                    descendingIcon: 'menubtn webperf-menubtn-desc'
                },
                sortOrder: [
                    {
                        field: 'postDate',
                        sortField: 'postDate',
                        direction: 'desc'
                    }
                ],
                fields: FieldDefs,
            }
        },
        mounted() {
            this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
            this.$events.$on('filter-reset', e => this.onFilterReset());
            this.$events.$on('change-range', eventData => this.onChangeRange(eventData));
        },
        methods: {
            onFilterSet (filterText) {
                this.moreParams.filter = filterText;
                this.$events.fire('refresh-table', this.$refs.vuetable);
            },
            onFilterReset () {
                this.moreParams.filter = '';
                this.$events.fire('refresh-table', this.$refs.vuetable);
            },
            onLoaded () {
                this.$events.fire('refresh-table-components', this.$refs.vuetable);
            },
            onPaginationData (paginationData) {
                this.$refs.paginationTop.setPaginationData(paginationData);
                this.$refs.paginationInfoTop.setPaginationData(paginationData);

                this.$refs.pagination.setPaginationData(paginationData);
                this.$refs.paginationInfo.setPaginationData(paginationData);
            },
            onChangePage (page) {
                this.$refs.vuetable.changePage(page);
            },
            onRowClicked(dataItem, event) {
                if (dataItem.detailPageUrl.length) {
                    window.location.href = dataItem.detailPageUrl;
                }
            },
            onChangeRange (range) {
                this.moreParams.start = range.start;
                this.moreParams.end = range.end;
                this.$events.fire('refresh-table', this.$refs.vuetable);
            },
            statFormatter(val) {
                return Number(val / 1000).toFixed(2) + "s";
            },
        }
    }
</script>

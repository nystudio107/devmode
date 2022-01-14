<template>
  <div
    :class="['vuetable-pagination-info', css.infoClass]"
  >
    {{ paginationInfo }}
  </div>
</template>

<script>
import PaginationInfoMixin from '@/vue/VuetablePaginationInfoMixin.vue'

export default {
  mixins: [PaginationInfoMixin],
}
</script>

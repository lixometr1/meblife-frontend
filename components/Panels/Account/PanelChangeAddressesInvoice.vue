<template>
  <Panel
    name="panel-account.changeAddressesInvoice"
    headerTheme="light"
    class="panel-account-change-addresses-invoice"
    closeType="back"
    @close="$emit('close')"
  >
    <template #title>{{
      $t("panelChangeAddressesInvoice.panelTitle")
    }}</template>
    <template #content>
      <div
        class="panel-modal__content flex align-stretch flex-column justify-start"
      >
        <div class="p-3 flex-1">
          <ChangeAddressesInvoiceForm :isNew="isNew" :id="id" ref="changeForm" @success="$emit('close')"/>
        </div>
        <div class="panel-modal__footer border-top border-grey p-3">
          <div class="flex">
            <div class="btn btn-red btn-md mr-2" @click="removeAddress">
              {{ $t("panelChangeAddressesInvoice.btns.delete") }}
            </div>
            <div class="btn btn-green btn-md flex-1 font-bold" @click="save">
              <span v-if="isNew">{{ $t("panelChangeAddressesInvoice.btns.add") }}</span>
              <span v-else>{{ $t("panelChangeAddressesInvoice.btns.save") }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Panel>
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    id: String,
  },
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    async save() {
      this.$refs.changeForm.submit();
    },
    removeAddress() {
      this.$refs.changeForm.removeAddress()
    },
  },
};
</script>

<style lang="scss" >
</style>
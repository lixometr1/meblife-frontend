<template>
  <Panel
    name="panel-login"
    headerTheme="light"
    class="panel-login"
    :isStatic="false"
    @close="$emit('close')"
  >
    <template v-slot:title>{{$t('panelLogin.panelTitle')}}</template>
    <template v-slot:content>
      <div class="p-3">
        <LoginForm @success="onSuccess" />
        <div class="text-right mt-1 text-14">
          <span class="cursor-pointer" @click="forgotPassword">{{$t('login.forgotPassword')}}</span>
        </div>
        <div class="text-center mt-2">{{$t('or')}}</div>
        <div class="mt-2 btn btn-red btn-md w-100" @click="createAccount">
          <b>{{$t('login.createAccount')}}</b>
        </div>
      </div>
    </template>
  </Panel>
</template>

<script>
export default {
  props: {
    success: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onSuccess() {
      this.success();
    },
    forgotPassword() {
      this.$store.dispatch("modal/open", { name: "panel-forgotPassword" });
    },
    createAccount() {
      this.$emit('close')
      this.$router.push(this.$url.account("register"));
    },
  },
};
</script>

<style lang="scss" >
</style>
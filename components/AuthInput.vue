<template>
  <div class="auth-input-wrapper">
    <div class="auth-input" :class="classes">
      <label class="auth-input__label" :for="inputId" @click="inputFocus">{{ label }}</label>
      <input
        class="auth-input__input"
        :type="type"
        :id="inputId"
        v-on="listeners"
        v-bind="attrs"
        @focus="onFocus"
        @blur="onBlur"
        ref="input"
      />
    </div>
    <p class="color-red mt-1 text-14 flex align-center" v-if="error.length > 0">
      <svgError width="15" class="mr-2" />{{ error }}
    </p>
  </div>
</template>

<script>
import svgError from "@/assets/icons/error.svg";
export default {
  props: {
    value: String,
    label: String,
    error: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      defalt: "text",
    },
  },
  components: {
    svgError,
  },
  created() {
    if (this.text) this.isActive = true;
  },
  data() {
    return {
      text: this.value,
      isActive: false,
    };
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        value: this.text,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
      };
    },
    classes() {
      return {
        active: this.isActive,
      };
    },
    inputId() {
      return "auth-input-" + this._uid;
    },
  },
  methods: {
    inputFocus() {
      this.$refs.input.focus()
    },  
    onInput(e) {
      this.text = e.target.value;
      this.$emit("input", this.text);
    },
    onFocus() {
      this.isActive = true;
    },
    onBlur() {
      if (!this.text) {
        this.isActive = false;
      }
    },
  },
  watch: {
    value() {
      this.text = this.value;
      if (this.text) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style lang="scss" >
.auth-input {
  position: relative;
  &__label {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    font-size: 1rem;
    transition: 0.2s;
  }
  &__input {
    width: 100%;
    padding-left: 1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1rem;
    border: 1px solid $grey;
    background: $pale;
    border-radius: 5px;
  }
  &.active {
    .auth-input__label {
      top: 0;
      left: 10px;
      transform: translateY(4px);
      font-size: 10px;
      // transform: scale3d(0.65, 0.65, 1);
    }
  }
}
</style>
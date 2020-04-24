<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      //数值和规则
      const value = this.form.model[this.prop];
      const rule = this.form.rules[this.prop];

      const schema = new Schema({ [this.prop]: rule });
      //返回promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    }
  }
};
</script>

<style></style>

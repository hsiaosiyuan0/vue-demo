<template>
<section id="datepicker">
  <section id="datepicker-1">
    <datepicker placeholder="click to select date" v-model="value" mode="date" min="2017-02-12"></datepicker>
  </section>
  <section id="datepicker-2">
    <datepicker placeholder="click to select date" v-model="value1" mode="daterange" min="2017-02-12"></datepicker>
  </section>
</section>
</template>

<script>
export default {
  data() {
    return {
      value: ['2017-02-01'],
      value1: ['2017-02-01']
    }
  },
  watch: {
    value(val) {
      console.log(val)
    }
  },
  mounted() {
    setTimeout(() => {
      this.cls = 'test1'
    }, 3000)
  }
}
</script>

<style>
#datepicker {
  padding: 20px;
}

#datepicker>section {
  background-color: #0097FF;
  padding: 10px;
  width: 300px;
  margin: 0 auto;
}

#datepicker-1 .selected input {
  width: 150px;
}
</style>

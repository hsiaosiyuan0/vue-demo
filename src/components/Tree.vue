<template>
<section id="tree">
  <section id="tree-1">
    <div class="filter">
      Filter: <input type="text" v-model="search" @keyup.enter="filter">
    </div>
    <tree :data="data" :loader="loader" :cbChanged="changed"></tree>
    <div class="result">
      Selected: {{ checked }}
    </div>
  </section>
</section>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        label: '江苏',
        children: [{
          label: '南京',
          isCity: true,
          children: [{
            label: '建邺区',
            isChecked: true,
            children: []
          }, {
            label: '秦淮区',
            children: []
          }]
        }, {
          label: '盐城',
          isCity: true,
          children: [{
            label: '大丰区',
            children: []
          }]
        }]
      }, {
        label: '浙江',
        children: [{
          label: '杭州',
          isCity: true,
          children: [{
            label: '萧山区',
            children: []
          }, {
            label: '余杭区',
            children: []
          }]
        }, {
          label: '嘉兴',
          isCity: true,
          children: [{
            label: '南湖区',
            children: []
          }, {
            label: '秀洲区',
            children: []
          }]
        }]
      }],
      search: '',
      checked: '',
      copy: []
    }
  },
  methods: {
    loader(node, resolve) {
      setTimeout(() => {
        if (node.data.label === '建邺区') {
          resolve([{
            label: '南湖街道',
            children: []
          }, {
            label: '奥体',
            children: []
          }])
        } else {
          resolve([])
        }
      }, 3000)
    },
    changed(checked) {
      this.checked = checked.map((c) => {
        return c.label
      }).join(', ')
    },
    walkFilter(nodes, reg) {
      let cs = []
      nodes.forEach((node) => {
        if (!node.isCity || node.isCity && reg.test(node.label)) {
          node.children = this.walkFilter(node.children, reg)
          cs.push(node)
        }
      })
      return cs
    },
    filter() {
      if (this.copy.length === 0) {
        this.copy = JSON.parse(JSON.stringify(this.data))
      }
      let copy = JSON.parse(JSON.stringify(this.copy))
      this.data = this.walkFilter(copy, new RegExp(this.search))
    }
  }
}
</script>

<style>
#tree-1 {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
}

#tree-1 .filter {
  font-size: 1.2em;
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
}

#tree-1 .result {
  font-size: 1.2em;
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
}
</style>

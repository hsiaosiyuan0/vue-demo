<template>
<section id="tooltip">
  <div class="top">
    <tooltip placement="top-left" v-model="visible">
      <div slot="outlet" class="test">top left</div>
      <div slot="tooltip">this is top left tip</div>
    </tooltip>
    <tooltip placement="top" v-model="visible">
      <div slot="outlet" class="test">top</div>
      <div slot="tooltip">this is top tip</div>
    </tooltip>
    <tooltip placement="top-right" v-model="visible">
      <div slot="outlet" class="test">top right</div>
      <div slot="tooltip">this is top right tip</div>
    </tooltip>
  </div>

  <div class="left">
    <tooltip placement="left-top" v-model="visible">
      <div slot="outlet" class="test">left top</div>
      <div slot="tooltip">
        <div>this is left top tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="left" v-model="visible">
      <div slot="outlet" class="test">left</div>
      <div slot="tooltip">
        <div>this is left tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="left-bottom" v-model="visible">
      <div slot="outlet" class="test">left bottom</div>
      <div slot="tooltip">
        <div>this is left bottom tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
  </div>

  <div class="right">
    <tooltip placement="right-top" v-model="visible">
      <div slot="outlet" class="test">right top</div>
      <div slot="tooltip">
        <div>this is right top tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="right" v-model="visible">
      <div slot="outlet" class="test">right</div>
      <div slot="tooltip">
        <div>this is right tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
    <tooltip placement="right-bottom" v-model="visible">
      <div slot="outlet" class="test">right bottom</div>
      <div slot="tooltip">
        <div>this is right bottom tip</div>
        <div>line 2</div>
        <div>line 3</div>
      </div>
    </tooltip>
  </div>

  <div class="bottom">
    <tooltip placement="bottom-left" v-model="visible">
      <div slot="outlet" class="test">bottom left</div>
      <div slot="tooltip">this is bottom left tip</div>
    </tooltip>
    <tooltip placement="bottom" v-model="visible">
      <div slot="outlet" class="test">bottom</div>
      <div slot="tooltip">this is bottom tip</div>
    </tooltip>
    <tooltip placement="bottom-right" v-model="visible">
      <div slot="outlet" class="test">bottom right</div>
      <div slot="tooltip">
        <div>this is bottom right tip</div>
        <div>next line</div>
      </div>
    </tooltip>
  </div>

  <div class="confirm">
    <tooltip placement="bottom-left" mode="click" v-model="visible1">
      <div slot="outlet" class="test">
        Remove
      </div>
      <div slot="tooltip">
        <h3>Are your sure?</h3>
        <div class="btns">
          <button class="yes" @click="handleYes">Yes</button>
          <button class="no" @click="handleNo">No</button>
        </div>
      </div>
    </tooltip>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false
    }
  },
  methods: {
    handleYes() {
      alert('Yes')
    },
    handleNo() {
      alert('No')
      this.visible1 = false
    }
  }
}
</script>

<style>
#tooltip {
  width: 600px;
  margin: 100px auto;
}

#tooltip>div {
  text-align: center;
}

#tooltip>.top>.hsy-tooltip,
#tooltip>.bottom>.hsy-tooltip {
  display: inline-block;
}

#tooltip .test {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ddd;
}

#tooltip div.top {
  margin-bottom: 15px;
}

#tooltip div.left {
  float: left;
}

#tooltip div.right {
  float: right;
}

#tooltip div.bottom {
  clear: both;
}

#tooltip div.right .test,
#tooltip div.left .test {
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}

#tooltip div.top .test,
#tooltip div.bottom .test {
  height: 50px;
  line-height: 50px;
}

#tooltip div.top .hsy-tooltip,
#tooltip div.bottom .hsy-tooltip {
  width: 160px;
  text-align: center;
}

#tooltip .hsy-tooltip .tooltip,
#tooltip .hsy-tooltip .tooltip {
  text-align: left;
}

#tooltip div.top .hsy-tooltip .outlet,
#tooltip div.bottom .hsy-tooltip .outlet {
  display: inline-block;
}

#tooltip div.confirm {
  margin-top: 50px;
}

#tooltip div.confirm button {
  border: 0;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  outline: none;
}

#tooltip div.confirm .test,
#tooltip div.confirm .no {
  color: #fff;
  background-color: #f84f47;
}

#tooltip div.confirm .yes {
  color: #fff;
  background-color: #0097ff;
}

#tooltip div.confirm h3 {
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 0;
}

#tooltip div.confirm .btns {
  padding-bottom: 5px;
  overflow: hidden;
}

#tooltip div.confirm .btns .yes {
  float: left;
}

#tooltip div.confirm .btns .no {
  float: right;
}
</style>

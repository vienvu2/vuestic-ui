<template>
  <VbDemo>
    <VbCard title="Default">
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Solid">
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        solid
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Disabled">
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        disabled
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Color">
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        color="success"
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        solid
        color="warning"
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        solid
        color="danger"
        color-all
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        solid
        color="#000"
        color-all
        text-color="white"
        icon="info"
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Icon">
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
        icon="home"
      >
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Layers">
      <va-expand
        v-model="expandValue"
        style="width: 400px;"
        :header="expandHeader"
      >
        <div class="expand-content">
          <va-expand
            v-for="(value, index) in expandLayerValue"
            :key="index"
            v-model="expandLayerValue[index]"
            :header="expandHeader"
          >
            <div class="expand-content">
              <va-expand
                v-for="(value, index) in expandSecondLayerValue"
                :key="index"
                v-model="expandSecondLayerValue[index]"
                :header="expandHeader"
              >
                <div class="expand-content">
                  {{ expandContent }}
                </div>
              </va-expand>
            </div>
          </va-expand>
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Custom header">
      <va-expand v-model="expandValue" style="width: 400px;">
        <template slot="header">
          <va-button style="width: 100%;">
            {{ expandHeader }}
          </va-button>
        </template>

        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>

    <VbCard title="Stateful">
      <va-expand stateful style="width: 400px;" :header="expandHeader">
        <div class="expand-content">
          {{ expandContent }}
        </div>
      </va-expand>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaButton from '../va-button/VaButton'
import VaExpand from './VaExpand.vue'

export default {
  components: {
    VaExpand,
    VaButton,
  },
  data () {
    return {
      expandValue: false,
      expandLayerValue: [false, false, false],
      expandSecondLayerValue: [false, false, false],
      expandHeader: 'Expand This Block',
      expandContent: 'Expand content',
    }
  },
}
</script>

<style lang="scss" scoped>
.expand-content {
  padding: 1rem;
}
</style>

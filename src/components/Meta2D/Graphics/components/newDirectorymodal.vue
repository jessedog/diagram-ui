<template>
  <a-modal
    v-model:visible="visible"
    centered
    title="新建文件夹"
    width="45%"
    :destroyOnClose="true"
    wrapClassName="editor-modal"
    cancelText="取消"
    okText="确定"
    @ok="handleOk"
  >
    <a-input
      class=""
      v-model:value="directoryName"
      placeholder="请输入文件夹名称"
    />
  </a-modal>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance, Ref } from 'vue';
import type { DrawingType } from '@/components/types';

export default defineComponent({
  emits: ['ok'],
  setup(props, { emit }) {
    let { proxy } = getCurrentInstance();


    let folderType: Ref<DrawingType> = ref('COMPONENT'); // 文件夹类型
    let visible = ref(false);

    let directoryName = ref('');

    function show(type: DrawingType) {
      
      folderType.value = type;
      visible.value = true;
      directoryName.value = '';
    }

    function handleOk() {
      if (directoryName.value.trim() === '') {
        proxy.$message.error('请输入文件夹名称');
        return;
      }
      emit('ok', folderType.value, directoryName.value.trim());
      visible.value = false;
    }

    return {
      directoryName,
      handleOk,
      show,
      visible
    };
  },
});
</script>
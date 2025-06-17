<template>
  <div>
    <div class="mkdir-head" @click="openAddDirModal">
      <folder-add-outlined />
      <span>新建文件夹</span>
    </div>
    <div class="">
      <a-collapse
        v-model:activeKey="directoryKey"
        :defaultExpandAll="true"
        expand-icon-position="right"
        accordion
        ghost
        :destroyInactivePanel="true"
      >
        <template v-for="(vo, idx) in folderList" :key="idx">
          <a-collapse-panel class="tw-group" :forceRender="true">
            <template #header>
              <div class="tw-flex tw-items-center">
                <folder-outlined class="tw-mr-1" />
                <span>{{ vo.name }}</span>
              </div>
            </template>
            <template #extra>
              <div class="tw-flex tw-items-center tw-gap-1 tw-transition-opacity tw-duration-200 tw-opacity-0 tw-ease-in-out group-hover:tw-opacity-100">
                <a-tooltip title="新建图纸" @click.stop="$emit('addDrawing', type, vo)">
                  <folder-add-outlined />
                </a-tooltip>
                <a-tooltip title="删除文件夹">
                  <a-popconfirm
                    placement="topLeft"
                    title="确定删除吗？"
                    @confirm.stop="$emit('deleteFolder', type, vo)"
                    okText="确定"
                    cancelText="取消"
                  >
                    <delete-outlined />
                  </a-popconfirm>
                </a-tooltip>
              </div>
            </template>
          </a-collapse-panel>
        </template>
      </a-collapse>
    </div>
    <NewDirectoryModal ref="newDirModal" v-bind="$attrs"/>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import { defineProps } from 'vue';
import { DrawingType } from '@/components/types';
import { FolderAddOutlined, FolderOutlined, FileAddOutlined, DeleteOutlined} from '@ant-design/icons-vue';
import NewDirectoryModal from './newDirectorymodal.vue';

defineComponent({
  name: 'FolderList',
  components: {
    FolderAddOutlined,
    FolderOutlined,
    NewDirectoryModal
  }
});

const emit = defineEmits(['addDrawing', 'deleteFolder']);

const props = defineProps({
  // 是否显示
  type: {
    type: String as () => DrawingType,
    required: true
  },
  folderList: {
    type: Array as () => Array<any>,
    default: () => []
  }
});
const newDirModal = ref(NewDirectoryModal);

// 折叠key
let directoryKey = ref("");

function openAddDirModal() {
  console.log('openAddDirModal', newDirModal.value);
  newDirModal.value.show(props.type);
}

</script>
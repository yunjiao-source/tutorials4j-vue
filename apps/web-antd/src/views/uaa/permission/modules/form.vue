<script lang="ts" setup>
import type { UaaPermissionApi } from '#/api';

import { computed, nextTick, ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { useVbenForm } from '#/adapter/form';
import { createPermission, updatePermission } from '#/api';
import { $t } from '#/locales';

import { useFormSchema } from '../data';

const emits = defineEmits(['success']);

const formData = ref<UaaPermissionApi.UaaPermission>();

const [Form, formApi] = useVbenForm({
  schema: useFormSchema(),
  showDefaultActions: false,
});

const id = ref();
const [Drawer, drawerApi] =
  useVbenDrawer<null | UaaPermissionApi.UaaPermission>({
    async onConfirm() {
      const { valid } = await formApi.validate();
      if (!valid) return;
      const values = await formApi.getValues();
      drawerApi.lock();
      (id.value ? updatePermission(id.value, values) : createPermission(values))
        .then(() => {
          emits('success');
          drawerApi.close();
        })
        .catch(() => {
          drawerApi.unlock();
        });
    },

    async onOpenChange(isOpen) {
      if (isOpen) {
        const data = drawerApi.getData();
        formApi.reset();

        if (data) {
          formData.value = data;
          id.value = data.id;
        } else {
          formData.value = undefined;
          id.value = undefined;
        }

        // Wait for Vue to flush DOM updates (form fields mounted)
        await nextTick();
        if (data) {
          formApi.setValues(data);
        }
      }
    },
  });

defineExpose({ drawerApi });

const getDrawerTitle = computed(() => {
  return formData.value?.id
    ? $t('ui.actionTitle.edit', [$t('uaa.permission._name')])
    : $t('ui.actionTitle.create', [$t('uaa.permission._name')]);
});
</script>
<template>
  <Drawer :title="getDrawerTitle">
    <Form />
  </Drawer>
</template>

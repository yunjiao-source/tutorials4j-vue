<script lang="ts" setup>
import type { Dayjs } from 'dayjs';

import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import type { UaaAuthHistoryApi } from '#/api';

import { Page } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { getAuthHistoryByPage } from '#/api';
import { $t } from '#/locales';
import { createDateRangeCodec } from '#/utils/date-range-codec';

import { useColumns, useGridFormSchema } from './data';

interface AuthHistorySearchFormValues extends Record<string, unknown> {
  createdTime?: [Dayjs, Dayjs];
}

const authHistorySearchCodec =
  createDateRangeCodec<AuthHistorySearchFormValues>()({
    endField: 'createdTimeEnd',
    rangeField: 'createdTime',
    startField: 'createdTimeBegin',
  });

type AuthHistorySearchSubmitValues = ReturnType<
  typeof authHistorySearchCodec.encode
>;

const [Grid] = useVbenVxeGrid({
  formOptions: {
    codec: authHistorySearchCodec,
    schema: useGridFormSchema(),
    submitOnChange: true,
  },
  gridOptions: {
    columns: useColumns(),
    height: 'auto',
    keepSource: true,
    proxyConfig: {
      ajax: {
        query: async ({ page }, formValues: AuthHistorySearchSubmitValues) => {
          return await getAuthHistoryByPage({
            page: page.currentPage,
            size: page.pageSize,
            ...formValues,
          });
        },
      },
    },
    rowConfig: {
      keyField: 'id',
    },

    toolbarConfig: {
      custom: true,
      export: false,
      refresh: true,
      search: true,
      zoom: true,
    },
  } as VxeTableGridOptions<UaaAuthHistoryApi.UaaAuthHistory>,
});
</script>
<template>
  <Page auto-content-height>
    <Grid :table-title="$t('uaa.authHistory._list')" />
  </Page>
</template>

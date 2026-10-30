import type { VbenFormSchema } from '#/adapter/form';
import type { VxeTableGridColumns } from '#/adapter/vxe-table';

import { getYesNoOptions } from '#/api';
import { $t } from '#/locales';

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'userFullName',
      label: $t('uaa.user.name'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: getYesNoOptions(),
      },
      fieldName: 'authStatusSet',
      label: $t('uaa.authHistory.authStatus'),
    },
    {
      component: 'RangePicker',
      fieldName: 'createdTime',
      label: $t('uaa.authHistory.createdTime'),
    },
  ];
}

export function useColumns(): VxeTableGridColumns {
  return [
    {
      field: 'user.username',
      title: $t('uaa.user.username'),
      width: 200,
    },
    {
      field: 'user.name',
      title: $t('uaa.user.name'),
      width: 200,
    },
    {
      field: 'ipAddress',
      title: $t('uaa.authHistory.ipAddress'),
      width: 200,
    },
    {
      field: 'region',
      title: $t('uaa.authHistory.region'),
      width: 200,
    },
    {
      field: 'platform',
      title: $t('uaa.authHistory.platform'),
      width: 200,
    },
    {
      field: 'browser',
      title: $t('uaa.authHistory.browser'),
      width: 200,
    },
    {
      field: 'authStatus',
      title: $t('uaa.authHistory.authStatus'),
      width: 100,
    },
    {
      field: 'createdTime',
      title: $t('uaa.authHistory.createdTime'),
      width: 150,
      formatter: 'formatDateTime',
    },
  ];
}

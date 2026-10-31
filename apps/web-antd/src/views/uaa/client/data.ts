import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridColumns } from '#/adapter/vxe-table';
import type { UaaPermissionApi } from '#/api';

import { useDictStore } from '@vben/stores';

import { CommonApi, getYesNoOptions } from '#/api';
import { $t } from '#/locales';

export function useFormSchema(): VbenFormSchema[] {
  const dictStore = useDictStore();
  return [
    {
      component: 'Input',
      fieldName: 'clientId',
      label: $t('uaa.client.clientId'),
      help: $t('uaa.client._help.auto'),
    },
    {
      component: 'Input',
      fieldName: 'clientName',
      label: $t('uaa.client.clientName'),
      rules: 'required',
    },
    {
      component: 'Input',
      fieldName: 'clientSecret',
      label: $t('uaa.client.clientSecret'),
      help: $t('uaa.client._help.auto'),
    },
    {
      component: 'Input',
      fieldName: 'subjectId',
      label: $t('uaa.client.subjectId'),
    },
    {
      type: 'group',
      name: 'sqpz',
      title: $t('uaa.client._group.sqpz'),
      defaultCollapsed: true,
      children: [
        {
          component: 'ApiSelect',
          fieldName: 'contractScopes',
          label: $t('uaa.client.contractScopes'),
          componentProps: {
            allowClear: true,
            mode: 'multiple',
            class: 'w-full',
            api: async () => dictStore.getDict(CommonApi.DictTypeCode.Shouqfw),
          },
          rules: 'required',
        },
        {
          component: 'ApiSelect',
          fieldName: 'allowRedirectUris',
          label: $t('uaa.client.allowRedirectUris'),
          componentProps: {
            allowClear: true,
            class: 'w-full',
            mode: 'tags',
          },
          help: $t('uaa.client._help.allowRedirectUris'),
          rules: 'required',
        },
        {
          component: 'ApiSelect',
          fieldName: 'allowGrantTypes',
          label: $t('uaa.client.allowGrantTypes'),
          componentProps: {
            allowClear: true,
            mode: 'multiple',
            class: 'w-full',
            api: async () => dictStore.getDict(CommonApi.DictTypeCode.Shouqlx),
          },
          rules: 'required',
        },
      ],
    },
    {
      type: 'group',
      name: 'cspz',
      title: $t('uaa.client._group.cspz'),
      defaultCollapsed: true,
      children: [
        {
          component: 'InputNumber',
          fieldName: 'accessTokenTimeout',
          label: $t('uaa.client.accessTokenTimeout'),
          componentProps: {
            addonAfter: '秒',
            precision: 0,
            min: 0,
            step: 1,
          },
        },
        {
          component: 'InputNumber',
          fieldName: 'refreshTokenTimeout',
          label: $t('uaa.client.refreshTokenTimeout'),
          componentProps: {
            addonAfter: '秒',
            precision: 0,
            min: 0,
            step: 1,
          },
        },
        {
          component: 'InputNumber',
          fieldName: 'clientTokenTimeout',
          label: $t('uaa.client.clientTokenTimeout'),
          componentProps: {
            addonAfter: '秒',
            precision: 0,
            min: 0,
            step: 1,
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'slpz',
      title: $t('uaa.client._group.slpz'),
      defaultCollapsed: true,
      children: [
        {
          component: 'InputNumber',
          fieldName: 'maxAccessTokenCount',
          label: $t('uaa.client.maxAccessTokenCount'),
          componentProps: {
            precision: 0,
            min: 0,
            step: 1,
          },
        },
        {
          component: 'InputNumber',
          fieldName: 'maxRefreshTokenCount',
          label: $t('uaa.client.maxRefreshTokenCount'),
          componentProps: {
            precision: 0,
            min: 0,
            step: 1,
          },
        },
        {
          component: 'InputNumber',
          fieldName: 'maxClientTokenCount',
          label: $t('uaa.client.maxClientTokenCount'),
          componentProps: {
            precision: 0,
            min: 0,
            step: 1,
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'kgpz',
      title: $t('uaa.client._group.kgpz'),
      defaultCollapsed: true,
      children: [
        {
          component: 'RadioGroup',
          componentProps: {
            buttonStyle: 'solid',
            options: getYesNoOptions(),
            optionType: 'button',
          },
          defaultValue: 'no',
          fieldName: 'isNewRefresh',
          label: $t('uaa.client.isNewRefresh'),
        },
        {
          component: 'RadioGroup',
          componentProps: {
            buttonStyle: 'solid',
            options: getYesNoOptions(),
            optionType: 'button',
          },
          defaultValue: 'no',
          fieldName: 'isAutoConfirm',
          label: $t('uaa.client.isAutoConfirm'),
        },
        {
          component: 'RadioGroup',
          componentProps: {
            buttonStyle: 'solid',
            options: getYesNoOptions(),
            optionType: 'button',
          },
          defaultValue: 'yes',
          fieldName: 'enabled',
          label: $t('shared.enabled'),
        },
      ],
    },
  ];
}

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'clientName',
      label: $t('uaa.client.clientName'),
    },
    {
      component: 'Input',
      fieldName: 'subjectId',
      label: $t('uaa.client.subjectId'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: getYesNoOptions(),
      },
      fieldName: 'isNewRefresh',
      label: $t('uaa.client.isNewRefresh'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: getYesNoOptions(),
      },
      fieldName: 'isAutoConfirm',
      label: $t('uaa.client.isAutoConfirm'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: getYesNoOptions(),
      },
      fieldName: 'enabled',
      label: $t('shared.enabled'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: getYesNoOptions(),
      },
      fieldName: 'reserved',
      label: $t('shared.reserved'),
    },
  ];
}

export function useColumns<T = UaaPermissionApi.UaaPermission>(
  onActionClick: OnActionClickFn<T>,
): VxeTableGridColumns {
  return [
    {
      field: 'clientId',
      title: $t('uaa.client.clientId'),
      width: 150,
    },
    {
      field: 'clientSecret',
      title: $t('uaa.client.clientSecret'),
      width: 150,
    },
    {
      field: 'clientName',
      title: $t('uaa.client.clientName'),
      width: 150,
    },
    {
      field: 'contractScopes',
      title: $t('uaa.client.contractScopes'),
      showOverflow: false,
      width: 200,
      cellRender: {
        name: 'CellDicts',
        props: { code: CommonApi.DictTypeCode.Shouqfw },
      },
    },
    {
      field: 'allowRedirectUris',
      title: $t('uaa.client.allowRedirectUris'),
      showOverflow: false,
      width: 200,
    },
    {
      field: 'allowGrantTypes',
      title: $t('uaa.client.allowGrantTypes'),
      showOverflow: false,
      width: 200,
      cellRender: {
        name: 'CellDicts',
        props: { code: CommonApi.DictTypeCode.Shouqlx },
      },
    },
    {
      field: 'subjectId',
      title: $t('uaa.client.subjectId'),
      width: 150,
    },
    {
      field: 'accessTokenTimeout',
      title: $t('uaa.client.accessTokenTimeout'),
      width: 150,
    },
    {
      field: 'refreshTokenTimeout',
      title: $t('uaa.client.refreshTokenTimeout'),
      width: 150,
    },
    {
      field: 'clientTokenTimeout',
      title: $t('uaa.client.clientTokenTimeout'),
      width: 150,
    },
    {
      field: 'maxAccessTokenCount',
      title: $t('uaa.client.maxAccessTokenCount'),
      width: 150,
    },
    {
      field: 'maxRefreshTokenCount',
      title: $t('uaa.client.maxRefreshTokenCount'),
      width: 150,
    },
    {
      field: 'maxClientTokenCount',
      title: $t('uaa.client.maxClientTokenCount'),
      width: 150,
    },
    {
      cellRender: { name: 'CellTag' },
      field: 'isNewRefresh',
      title: $t('uaa.client.isNewRefresh'),
      width: 100,
    },
    {
      cellRender: { name: 'CellTag' },
      field: 'isAutoConfirm',
      title: $t('uaa.client.isAutoConfirm'),
      width: 100,
    },
    {
      cellRender: { name: 'CellTag' },
      field: 'enabled',
      title: $t('shared.enabled'),
      width: 100,
    },
    {
      cellRender: { name: 'CellTag' },
      field: 'reserved',
      title: $t('shared.reserved'),
      width: 100,
    },
    {
      field: 'createdDate',
      title: $t('shared.createDate'),
      width: 150,
      formatter: 'formatDateTime',
    },
    {
      field: 'lastModifiedDate',
      title: $t('shared.lastModifiedDate'),
      width: 150,
      formatter: 'formatDateTime',
    },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'clientName',
          nameTitle: $t('uaa.client._name'),
          onClick: onActionClick,
        },
        name: 'CellOperation',
      },
      field: 'operation',
      fixed: 'right',
      title: $t('shared.operation'),
      width: 130,
    },
  ];
}

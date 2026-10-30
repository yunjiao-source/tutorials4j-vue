import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridColumns } from '#/adapter/vxe-table';
import type { UaaPermissionApi } from '#/api';

import { getYesNoOptions } from '#/api';
import { $t } from '#/locales';

export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'name',
      label: $t('shared.name'),
      rules: 'required',
    },
    {
      component: 'Input',
      fieldName: 'code',
      label: $t('shared.code'),
      rules: 'required',
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
    {
      component: 'Textarea',
      fieldName: 'description',
      label: $t('shared.description'),
    },
  ];
}

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'keyword',
      label: $t('shared.keyword'),
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
      field: 'name',
      title: $t('shared.name'),
      width: 200,
    },
    {
      field: 'code',
      title: $t('shared.code'),
      width: 200,
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
      field: 'description',
      minWidth: 200,
      title: $t('shared.description'),
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
          nameField: 'name',
          nameTitle: $t('shared.name'),
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

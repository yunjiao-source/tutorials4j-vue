import { $t } from '#/locales';

export namespace CommonApi {
  export const Gender = ['male', 'female'] as const;
  export const YesNo = ['no', 'yes'] as const;
}

function getYesNoOptions() {
  return [
    { label: $t('shared.yes'), value: 'yes' },
    { label: $t('shared.no'), value: 'no' },
  ];
}

export { getYesNoOptions };

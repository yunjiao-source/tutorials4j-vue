import { setDictHandler } from '@vben/stores';

import {
  getDictTypeAllWithMap,
  getDictTypeDataByCode,
  getDictTypeVersion,
} from '#/api';

/**
 * 初始化字典处理，通过 API 获取字典数据
 */
export function initDict() {
  setDictHandler({
    getDict(code: string) {
      return getDictTypeDataByCode(code);
    },
    getAllDicts() {
      return getDictTypeAllWithMap();
    },
    getVersion() {
      return getDictTypeVersion();
    },
  });
}

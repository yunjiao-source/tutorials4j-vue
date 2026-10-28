import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

export namespace SystemDictApi {
  export interface SystemDictType {
    [key: string]: any;
    id: string;
    parentId?: string;
    name: string;
    code: string;
    isTree: boolean;
    ordered?: number;
    description?: string;
    reserved?: boolean;
    enabled?: boolean;
    createdTime?: string;
    lastModifiedDate?: string;
  }

  export interface SystemDictTypeTree extends SystemDictType {
    children?: SystemDictType[];
  }

  export interface SystemDictData {
    [key: string]: any;
    id: string;
    parentId?: string;
    name: string;
    code: string;
    dictTypeId: string;
    dictType: SystemDictType;
    ordered?: number;
    description?: string;
    reserved?: boolean;
    enabled?: boolean;
    createdTime?: string;
    lastModifiedDate?: string;
  }

  export interface SystemDictDataTree extends SystemDictData {
    children?: SystemDictData[];
  }
}

/** dict data */

/**
 * 获取字典数据分页数据
 */
async function getDictDataByPage(params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictData>>(
    '/system/basic/dict-data/page',
    { params },
  );
}

/**
 * 创建字典数据
 * @param data 字典数据数据
 */
async function createDictData(data: Omit<SystemDictApi.SystemDictData, 'id'>) {
  return requestClient.post<SystemDictApi.SystemDictData>(
    '/system/basic/dict-data',
    data,
  );
}

/**
 * 更新字典数据
 *
 * @param id 字典数据 ID
 * @param data 字典数据数据
 */
async function updateDictData(
  id: string,
  data: Omit<SystemDictApi.SystemDictData, 'id'>,
) {
  return requestClient.put<SystemDictApi.SystemDictData>(
    `/system/basic/dict-data/${id}`,
    data,
  );
}

/**
 * 获取字典数据
 * @param id 字典数据 ID
 * @returns 字典数据数据
 */
async function getDictDataById(id: string) {
  return requestClient.get<SystemDictApi.SystemDictData>(
    `/system/basic/dict-data/${id}`,
  );
}

/**
 * 删除字典数据
 * @param id 字典数据 ID
 */
async function deleteDictData(id: string) {
  return requestClient.delete(`/system/basic/dict-data/${id}`);
}

/** dict type */

/**
 * 获取字典类型分页数据
 */
async function getDictTypeByPage(params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictType>>(
    '/system/basic/dict-type/page',
    { params },
  );
}

/**
 * 创建字典类型
 * @param type 字典类型数据
 */
async function createDictType(data: Omit<SystemDictApi.SystemDictType, 'id'>) {
  return requestClient.post<SystemDictApi.SystemDictType>(
    '/system/basic/dict-type',
    data,
  );
}

/**
 * 更新字典类型
 *
 * @param id 字典类型 ID
 * @param data 字典类型数据
 */
async function updateDictType(
  id: string,
  data: Omit<SystemDictApi.SystemDictType, 'id'>,
) {
  return requestClient.put<SystemDictApi.SystemDictType>(
    `/system/basic/dict-type/${id}`,
    data,
  );
}

/**
 * 获取字典类型
 * @param id 字典类型 ID
 * @returns 字典类型数据
 */
async function getDictTypeById(id: string) {
  return requestClient.get<SystemDictApi.SystemDictType>(
    `/system/basic/dict-type/${id}`,
  );
}

/**
 * 删除字典类型
 * @param id 字典类型 ID
 */
async function deleteDictType(id: string) {
  return requestClient.delete(`/system/basic/dict-type/${id}`);
}

/**
 * 获取顶级字典类型
 * @param params 参数
 * @returns 字典类型数据
 */
async function getDictTypeRoot(params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictType>>(
    `/system/basic/dict-type/root`,
    { params },
  );
}

/**
 * 获取子字典类型
 * @param id 字典类型 ID
 * @param params 参数
 * @returns 字典类型数据
 */
async function getDictTypeChildrenById(id: string, params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictType>>(
    `/system/basic/dict-type/${id}/children`,
    { params },
  );
}

/**
 * 获取顶级字典类型树
 * @param params 参数
 * @returns 字典类型数据
 */
async function getDictTypeTree(params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictTypeTree>>(
    `/system/basic/dict-type/tree`,
    { params },
  );
}

/**
 * 获取字典数据
 * @param id 字典类型 ID
 * @param params 参数
 * @returns 字典数据
 */
async function getDictTypeDataById(id: string, params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictData>>(
    `/system/basic/dict-type/by-id/${id}/dict-data`,
    { params },
  );
}

/**
 * 获取顶级字典数据
 * @param code 字典类型 code
 * @param params 参数
 * @returns 字典数据
 */
async function getDictTypeDataByCode(code: string, params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictData>>(
    `/system/basic/dict-type/by-code/${code}/dict-data`,
    { params },
  );
}

/**
 * 获取字典数据树
 * @param id 字典类型 ID
 * @param params 参数
 * @returns 字典数据
 */
async function getDictTypeDataTreeById(id: string, params: Recordable<any>) {
  return requestClient.get<Array<SystemDictApi.SystemDictDataTree>>(
    `/system/basic/dict-type/by-id/${id}/dict-data/tree`,
    { params },
  );
}

/**
 * 获取顶级字典数据树
 * @param code 字典类型 code
 * @param params 参数
 * @returns 字典数据
 */
async function getDictTypeDataTreeByCode(
  code: string,
  params: Recordable<any>,
) {
  return requestClient.get<Array<SystemDictApi.SystemDictDataTree>>(
    `/system/basic/dict-type/by-code/${code}/dict-data/tree`,
    { params },
  );
}

export {
  createDictData,
  createDictType,
  deleteDictData,
  deleteDictType,
  getDictDataById,
  getDictDataByPage,
  getDictTypeById,
  getDictTypeByPage,
  getDictTypeChildrenById,
  getDictTypeDataByCode,
  getDictTypeDataById,
  getDictTypeDataTreeByCode,
  getDictTypeDataTreeById,
  getDictTypeRoot,
  getDictTypeTree,
  updateDictData,
  updateDictType,
};

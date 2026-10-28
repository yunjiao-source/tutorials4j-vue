import type { Recordable } from '@vben/types';

import type { UaaRoleApi } from '#/api/uaa/role';

import { requestClient } from '#/api/request';

export namespace UaaOrganizeApi {
  export const OrganizeCategory = ['company', 'department'] as const;

  export interface UaaOrganize {
    [key: string]: any;
    id: string;
    parentId: string;
    code: string;
    name: string;
    shortName?: string;
    ordered?: number;
    category: (typeof OrganizeCategory)[number];
    reserved?: boolean;
    enabled?: boolean;
    createDate?: string;
    lastModifiedDate?: string;
  }

  export interface UaaOrganizeTree extends UaaOrganize {
    children?: UaaOrganize[];
  }
}

/**
 * 获取组织分页数据
 */
async function getOrganizeByPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaOrganizeApi.UaaOrganize>>(
    '/uaa/upms/organize/page',
    { params },
  );
}

/**
 * 创建组织
 * @param data 组织数据
 */
async function createOrganize(data: Omit<UaaOrganizeApi.UaaOrganize, 'id'>) {
  return requestClient.post<UaaOrganizeApi.UaaOrganize>(
    '/uaa/upms/organize',
    data,
  );
}

/**
 * 更新组织
 *
 * @param id 组织 ID
 * @param data 组织数据
 */
async function updateOrganize(
  id: string,
  data: Omit<UaaOrganizeApi.UaaOrganize, 'id'>,
) {
  return requestClient.put<UaaOrganizeApi.UaaOrganize>(
    `/uaa/upms/organize/${id}`,
    data,
  );
}

/**
 * 获取组织
 * @param id 组织 ID
 * @returns 组织数据
 */
async function getOrganizeById(id: string) {
  return requestClient.get<UaaOrganizeApi.UaaOrganize>(
    `/uaa/upms/organize/${id}`,
  );
}

/**
 * 删除组织
 * @param id 组织 ID
 */
async function deleteOrganize(id: string) {
  return requestClient.delete(`/uaa/upms/organize/${id}`);
}

/**
 * 获取角色
 * @param id 组织 ID
 * @returns 角色数据
 */
async function getOrganizeRolesById(id: string) {
  return requestClient.get<Array<UaaRoleApi.UaaRole>>(
    `/uaa/upms/organizes/${id}/roles`,
  );
}

/**
 * 获取子组织
 * @param id 组织 ID
 * @returns 组织数据
 */
async function getOrganizeChildrenById(id: string) {
  return requestClient.get<Array<UaaOrganizeApi.UaaOrganize>>(
    `/uaa/upms/organizes/${id}/children`,
  );
}

/**
 * 获取顶级组织
 * @returns 组织数据
 */
async function getOrganizeRoot() {
  return requestClient.get<Array<UaaOrganizeApi.UaaOrganize>>(
    `/uaa/upms/organizes/root`,
  );
}

/**
 * 获取所有组织
 * @returns 组织数据
 */
async function getOrganizeAllById() {
  return requestClient.get<Array<UaaOrganizeApi.UaaOrganize>>(
    `/uaa/upms/organizes/all`,
  );
}

/**
 * 获取组织树
 * @returns 组织数据
 */
async function getOrganizeTreeById(params?: Recordable<any>) {
  return requestClient.get<Array<UaaOrganizeApi.UaaOrganizeTree>>(
    `/uaa/upms/organizes/tree`,
    { params },
  );
}

export {
  createOrganize,
  deleteOrganize,
  getOrganizeAllById,
  getOrganizeById,
  getOrganizeByPage,
  getOrganizeChildrenById,
  getOrganizeRolesById,
  getOrganizeRoot,
  getOrganizeTreeById,
  updateOrganize,
};

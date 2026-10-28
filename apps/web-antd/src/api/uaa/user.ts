import type { Recordable } from '@vben/types';

import type { UaaOrganizeApi } from './organize';
import type { UaaRoleApi } from './role';

import type { CommonApi } from '#/api/core/common';

import { requestClient } from '#/api/request';

export namespace UaaUserApi {
  export const UserStatus = [
    'active',
    'disabled',
    'locked',
    'expired',
  ] as const;

  export interface UaaUser {
    [key: string]: any;
    id: string;
    username: string;
    password: string;
    name: string;
    nickname?: string;
    phoneNumber?: string;
    avatar?: string;
    email?: string;
    profile?: string;
    website?: string;
    gender?: (typeof CommonApi.Gender)[number];
    birthdate?: Date;
    accountExpireAt?: Date;
    credentialsExpireAt?: Date;
    zoneInfo?: string;
    localeInfo?: string;
    status?: (typeof UserStatus)[number];
    organizeId?: string;
    organize?: UaaOrganizeApi.UaaOrganize;
    createDate?: string;
    lastModifiedDate?: string;
  }
}

/**
 * 获取用户分页数据
 */
async function getUserByPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaUserApi.UaaUser>>('/uaa/upms/user/page', {
    params,
  });
}

/**
 * 创建用户
 * @param data 用户数据
 */
async function createUser(data: Omit<UaaUserApi.UaaUser, 'id'>) {
  return requestClient.post<UaaUserApi.UaaUser>('/uaa/upms/user', data);
}

/**
 * 更新用户
 *
 * @param id 用户 ID
 * @param data 用户数据
 */
async function updateUser(id: string, data: Omit<UaaUserApi.UaaUser, 'id'>) {
  return requestClient.put<UaaUserApi.UaaUser>(`/uaa/upms/user/${id}`, data);
}

/**
 * 获取用户
 * @param id 用户 ID
 * @returns 用户数据
 */
async function getUserById(id: string) {
  return requestClient.get<UaaUserApi.UaaUser>(`/uaa/upms/user/${id}`);
}

/**
 * 删除用户
 * @param id 用户 ID
 */
async function deleteUser(id: string) {
  return requestClient.delete(`/uaa/upms/user/${id}`);
}

/**
 * 获取角色
 * @param id 用户 ID
 * @returns 角色数据
 */
async function getRolesById(id: string) {
  return requestClient.get<Array<UaaRoleApi.UaaRole>>(
    `/uaa/upms/organizes/${id}/roles`,
  );
}

/**
 * 获取用户
 * @param username 用户名
 * @returns 用户数据
 */
async function getUserByUsername(username: string) {
  return requestClient.get<UaaUserApi.UaaUser>(
    `/uaa/upms/user/by-username/${username}`,
  );
}

/**
 * 用户添加角色
 * @param username 用户名
 * @returns 用户数据
 */
async function userAddRoles(id: string, roleCodes: string[]) {
  return requestClient.put(`/uaa/upms/user/${id}/roles`, roleCodes);
}

export {
  createUser,
  deleteUser,
  getRolesById,
  getUserById,
  getUserByPage,
  getUserByUsername,
  updateUser,
  userAddRoles,
};

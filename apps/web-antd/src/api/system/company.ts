import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

export namespace SystemCompanyApi {
  export interface SystemCompany {
    [key: string]: any;
    id: string;
    name: string;
    shortName: string;
    organizeCode?: string;
    companyType?: string;
    industry?: string;
    establishmentDate?: string;
    phone?: string;
    fax?: string;
    website?: string;
    address?: string;
    legalRepresentative?: string;
    contactPhone?: string;
    contactMobile?: string;
    contactEmail?: string;
    openingBank?: string;
    bankAccount?: string;
    businessScope?: string;
    reserved?: boolean;
    enabled?: boolean;
    createdTime?: string;
    lastModifiedDate?: string;
  }
}

/**
 * 获取公司分页数据
 */
async function getCompanyByPage(params: Recordable<any>) {
  return requestClient.get<Array<SystemCompanyApi.SystemCompany>>(
    '/system/basic/company/page',
    { params },
  );
}

/**
 * 创建公司
 * @param data 公司数据
 */
async function createCompany(data: Omit<SystemCompanyApi.SystemCompany, 'id'>) {
  return requestClient.post<SystemCompanyApi.SystemCompany>(
    '/system/basic/company',
    data,
  );
}

/**
 * 更新公司
 *
 * @param id 公司 ID
 * @param data 公司数据
 */
async function updateCompany(
  id: string,
  data: Omit<SystemCompanyApi.SystemCompany, 'id'>,
) {
  return requestClient.put<SystemCompanyApi.SystemCompany>(
    `/system/basic/company/${id}`,
    data,
  );
}

/**
 * 获取公司
 * @param id 公司 ID
 * @returns 公司数据
 */
async function getCompanyById(id: string) {
  return requestClient.get<SystemCompanyApi.SystemCompany>(
    `/system/basic/company/${id}`,
  );
}

/**
 * 删除公司
 * @param id 公司 ID
 */
async function deleteCompany(id: string) {
  return requestClient.delete(`/system/basic/company/${id}`);
}

/**
 * 获取公司
 * @param organizeCode 组织代码
 * @returns 公司数据
 */
async function getCompanyByOrganizeCode(organizeCode: string) {
  return requestClient.get<SystemCompanyApi.SystemCompany>(
    `/system/basic/company/by-organize-code/${organizeCode}`,
  );
}

export {
  createCompany,
  deleteCompany,
  getCompanyById,
  getCompanyByOrganizeCode,
  getCompanyByPage,
  updateCompany,
};

import { DrawingType } from '@/components/types';
import http from '@/utils/request';

const API = {
  base: '/folder',
  lists: '/folder/lists',
}

/**
 * 获取文件夹列表
 * @param data
 * @returns
 */
export async function getAllFolderList() {
  return await http.get(API.base)
}

export async function getFolder(id: string) {
  return await http.get(`${API.lists}/${id}`)
}

export async function createFolder(name: string, type: DrawingType) {
  const data =  {
    name,
    type,
  }
  return await http.post(API.base, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function deleteFolder(id: string) {
  return await http.delete(`${API.base}/${id}`)
}

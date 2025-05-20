
export function findObjById<T extends { id: string }, K extends keyof T>(
  arr: T[], id: string, childKey: K): T | undefined {
  for (const obj of arr) {
    if (obj.id === id) {
      return obj;
    }
    
    if (obj[childKey] && Array.isArray(obj[childKey])) {
      const found = findObjById(obj[childKey], id, childKey);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}
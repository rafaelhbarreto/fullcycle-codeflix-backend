export function deepFreeze<T>(obj: T) {
  const propNames = Object.getOwnPropertyNames(obj);

  for(const name in propNames) {
    const value = obj[name as keyof T];

    if(value && typeof value === "object") {
      deepFreeze(obj);
    }
  }

  return Object.freeze(obj);
}
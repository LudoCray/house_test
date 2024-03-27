function deepCopy(obj, originalToCopy = new WeakMap()) {
  
    // Обрабатываем данные
    if (obj instanceof Date) {
      return new Date(obj);
    }
    if (obj instanceof Map) {
      var copy = new Map();
      originalToCopy.set(obj, copy);
      obj.forEach((value, key) => {
        copy.set(deepCopy(key, originalToCopy), deepCopy(value, originalToCopy));
      });
      return copy;
    }
    if (obj instanceof Set) {
      var copy = new Set();
      originalToCopy.set(obj, copy);
      obj.forEach(value => {
        copy.add(deepCopy(value, originalToCopy));
      });
      return copy;
    }
    
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    
    // Создаем копию
    var copy = Array.isArray(obj) ? [] : {};
    originalToCopy.set(obj, copy);
    
    // Копируем свойства объекта рекурсивно
    Object.keys(obj).forEach(key => {
      copy[key] = deepCopy(obj[key], originalToCopy);
    });
    
    return copy;
  }
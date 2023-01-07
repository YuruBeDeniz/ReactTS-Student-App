export const GenericSort = <Type,>(items: Array<Type>, key: keyof Type) => {
    items.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    })
    return items
  }
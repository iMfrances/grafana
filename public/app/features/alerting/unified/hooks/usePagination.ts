import { useCallback, useEffect, useMemo, useState } from 'react';

export function usePagination<T>(items: T[], initialPage: number, itemsPerPage: number) {
  const [page, setPage] = useState(initialPage);

  const numberOfPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [items, itemsPerPage]);

  const firstItemOnPageIndex = useMemo(() => itemsPerPage * (page - 1), [itemsPerPage, page]);
  const pageItems = useMemo(
    () => items.slice(firstItemOnPageIndex, firstItemOnPageIndex + itemsPerPage),
    [items, firstItemOnPageIndex, itemsPerPage]
  );

  const onPageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
    },
    [setPage]
  );

  // Reset the current page when number of pages has been changed
  useEffect(() => setPage(1), [numberOfPages]);

  return { page, onPageChange, numberOfPages, pageItems };
}

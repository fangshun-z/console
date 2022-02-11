export interface UsePaginationReturnType {
  pageNum: number;
  pageSize: number;
  totalSize: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  setPageNum: (pageNum: number) => unknown;
  setPageSize: (pageSize: number) => unknown;
  setTotalSize: (totalSize: number) => unknown;
}

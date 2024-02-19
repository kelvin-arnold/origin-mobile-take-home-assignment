export type TransactionsEntity = {
  Id: number;
  Amount: number;
  Date: string;
  Vendor: string;
  Type: string;
  Category: string;
  Lat: number;
  Lon: number;
  ReceiptImage: string;
};

export type Transactions = {
  Page: number;
  PageSize: number;
  TotalRecords: number;
  TotalPages: number;
  Transactions?: TransactionsEntity[] | null;
};

export type Coordinates = {
  Lat: number;
  Lon: number;
};

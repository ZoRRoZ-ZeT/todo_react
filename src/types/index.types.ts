export type ChartData = Array<{
  dataName: string;
  dataValue: number;
}>;

export type Sector = {
  color: string;
  name: string;
  start: number;
  end: number;
};

export enum Status {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  ALL = 'ALL',
}

export enum Priority {
  HIGH = 'higher',
  MEDIUM = 'medium',
  LOW = 'low',
  NONE = 'none',
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

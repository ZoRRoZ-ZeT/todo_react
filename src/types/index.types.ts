import messages from '../translations/lang.json';

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
  HIGH = 'high',
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

export type MessageType = keyof typeof messages;

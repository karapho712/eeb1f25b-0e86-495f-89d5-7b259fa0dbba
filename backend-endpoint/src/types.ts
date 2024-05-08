export enum Position {
  CEO = 'CEO',
  CTO = 'CTO',
  Controller = 'Controller',
  HRAsistant = 'HR Assistan',
  HRManager = 'HR Manager',
  ITManager = 'IT Manager',
  NetworkAdminNew = 'Network Admin New',
  Ombudsman = 'Ombudsman',
  SalesAssistant = 'Sales Assistant',
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type Order<T> = { [K in keyof T]?: SortOrder };

import { ColumnType, Generated } from "kysely";

export interface UserTable {
  id: Generated<number>;
  created_at: ColumnType<Date, string | undefined, never>;
  updated_at: ColumnType<Date, string | undefined, never>;
}

export interface Database {
  users: UserTable;
}

import { ReactNode } from 'react';

type TableColumn<T> = {
  key: keyof T;
  header: ReactNode;
  render?: (row: T) => ReactNode;
};

type CustomTableProps<T> = {
  columns: Array<TableColumn<T>>;
  data: T[];
};

export function CustomTable<T extends Record<string, unknown>>({ columns, data }: CustomTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={String(column.key)}>{column.render ? column.render(row) : String(row[column.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

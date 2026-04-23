'use client';

interface DataTableProps {
  data: Array<Record<string, unknown>>;
  title?: string;
  columns?: string[];
}

export function DataTable({ data, title = 'Data Table', columns }: DataTableProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const tableColumns = columns || Object.keys(data[0] || {});

  return (
    <div className="mb-8">
      <h3 className="font-mystical text-lg font-bold text-cosmic-gold mb-4">{title}</h3>
      <div className="overflow-x-auto border border-cosmic-border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-cosmic-card border-b border-cosmic-border">
              {tableColumns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-sm font-bold text-cosmic-gold text-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-cosmic-border hover:bg-cosmic-card/50 transition-colors"
              >
                {tableColumns.map((col) => {
                  let value = row[col];
                  if (typeof value === 'object') {
                    value = JSON.stringify(value);
                  }
                  return (
                    <td key={`${idx}-${col}`} className="px-4 py-2 text-sm text-cosmic-text">
                      {String(value || '-')}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

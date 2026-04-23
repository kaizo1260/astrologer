'use client';

import { SubjectInput } from '@/lib/types';
import { monthNames } from '@/lib/utils';
import { MysticButton } from '@/components/ui/MysticButton';
import { ChangeEvent } from 'react';

interface SubjectFormProps {
  value: SubjectInput;
  onChange: (updated: SubjectInput) => void;
  onSubmit: () => void;
  loading?: boolean;
  title?: string;
}

export function SubjectForm({
  value,
  onChange,
  onSubmit,
  loading = false,
  title = 'Thông Tin Cá Nhân',
}: SubjectFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value: fieldValue } = e.target;
    const numFields = ['year', 'month', 'day', 'hour', 'minute'];
    const numValue = numFields.includes(name) ? parseInt(fieldValue, 10) : fieldValue;

    onChange({
      ...value,
      [name]: numValue,
    });
  };

  const today = new Date();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Tên */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Tên</label>
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
            placeholder="Nhập tên"
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text placeholder-cosmic-muted focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Năm sinh */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Năm Sinh</label>
          <input
            type="number"
            name="year"
            value={value.year}
            onChange={handleChange}
            min={1900}
            max={today.getFullYear()}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Tháng sinh */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Tháng Sinh</label>
          <select
            name="month"
            value={value.month}
            onChange={handleChange}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          >
            <option value="">Chọn tháng</option>
            {monthNames.map((month, idx) => (
              <option key={idx} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Ngày sinh */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Ngày Sinh</label>
          <input
            type="number"
            name="day"
            value={value.day}
            onChange={handleChange}
            min={1}
            max={31}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Giờ sinh */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Giờ Sinh</label>
          <input
            type="number"
            name="hour"
            value={value.hour}
            onChange={handleChange}
            min={0}
            max={23}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Phút sinh */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Phút Sinh</label>
          <input
            type="number"
            name="minute"
            value={value.minute}
            onChange={handleChange}
            min={0}
            max={59}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Thành phố */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Thành Phố</label>
          <input
            type="text"
            name="city"
            value={value.city}
            onChange={handleChange}
            placeholder="Ví dụ: Ho Chi Minh City"
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text placeholder-cosmic-muted focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Quốc gia */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Quốc Gia</label>
          <input
            type="text"
            name="nation"
            value={value.nation}
            onChange={handleChange}
            placeholder="Ví dụ: VN"
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text placeholder-cosmic-muted focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>
      </div>

      <MysticButton type="submit" disabled={loading} className="w-full">
        {loading ? 'Đang tính toán...' : 'Xem Kết Quả'}
      </MysticButton>
    </form>
  );
}

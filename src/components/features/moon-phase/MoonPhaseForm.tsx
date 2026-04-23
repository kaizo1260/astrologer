'use client';

import { useState, ChangeEvent } from 'react';
import { monthNames } from '@/lib/utils';
import { MysticButton } from '@/components/ui/MysticButton';

interface MoonPhaseFormState {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  city: string;
}

interface MoonPhaseFormProps {
  onSubmit: (data: MoonPhaseFormState) => void;
  loading?: boolean;
}

export function MoonPhaseForm({ onSubmit, loading = false }: MoonPhaseFormProps) {
  const today = new Date();
  const [data, setData] = useState<MoonPhaseFormState>({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    hour: today.getHours(),
    minute: today.getMinutes(),
    city: 'Ho Chi Minh City',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numFields = ['year', 'month', 'day', 'hour', 'minute'];
    const numValue = numFields.includes(name) ? parseInt(value, 10) : value;

    setData({
      ...data,
      [name]: numValue,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(data);
      }}
    >
      <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-6">
        Ngày và Địa Điểm
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Năm */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Năm</label>
          <input
            type="number"
            name="year"
            value={data.year}
            onChange={handleChange}
            min={1900}
            max={2100}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Tháng */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Tháng</label>
          <select
            name="month"
            value={data.month}
            onChange={handleChange}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          >
            {monthNames.map((month, idx) => (
              <option key={idx} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Ngày */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Ngày</label>
          <input
            type="number"
            name="day"
            value={data.day}
            onChange={handleChange}
            min={1}
            max={31}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Giờ */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Giờ (UTC)</label>
          <input
            type="number"
            name="hour"
            value={data.hour}
            onChange={handleChange}
            min={0}
            max={23}
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

        {/* Phút */}
        <div>
          <label className="block text-cosmic-text text-sm mb-2">Phút</label>
          <input
            type="number"
            name="minute"
            value={data.minute}
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
            value={data.city}
            onChange={handleChange}
            placeholder="Ví dụ: Ho Chi Minh City"
            className="w-full bg-cosmic-bg border border-cosmic-border rounded px-3 py-2 text-cosmic-text placeholder-cosmic-muted focus:outline-none focus:border-cosmic-gold"
            required
          />
        </div>

      </div>

      <MysticButton type="submit" disabled={loading} className="w-full">
        {loading ? 'Đang tải...' : 'Xem Pha Mặt Trăng'}
      </MysticButton>
    </form>
  );
}

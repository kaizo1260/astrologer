'use client';

import { useState } from 'react';
import { SubjectInput } from '@/lib/types';
import { SubjectForm } from '@/components/forms/SubjectForm';
import { MysticButton } from '@/components/ui/MysticButton';

interface CompatibilityFormProps {
  onSubmit: (first: SubjectInput, second: SubjectInput) => void;
  loading?: boolean;
}

const defaultSubject: SubjectInput = {
  name: '',
  year: 1990,
  month: 1,
  day: 1,
  hour: 12,
  minute: 0,
  city: 'Ho Chi Minh City',
  nation: 'VN',
};

export function CompatibilityForm({ onSubmit, loading = false }: CompatibilityFormProps) {
  const [first, setFirst] = useState<SubjectInput>(defaultSubject);
  const [second, setSecond] = useState<SubjectInput>(defaultSubject);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(first, second);
      }}
      className="space-y-8"
    >
      <SubjectForm
        value={first}
        onChange={setFirst}
        onSubmit={() => {}}
        title="Thông Tin Người Thứ 1"
      />

      <div className="flex justify-center">
        <div className="text-3xl text-cosmic-gold">♾️</div>
      </div>

      <SubjectForm
        value={second}
        onChange={setSecond}
        onSubmit={() => {}}
        title="Thông Tin Người Thứ 2"
      />

      <MysticButton type="submit" disabled={loading} className="w-full">
        {loading ? 'Đang tính toán...' : 'Tính Hợp Tuổi'}
      </MysticButton>
    </form>
  );
}

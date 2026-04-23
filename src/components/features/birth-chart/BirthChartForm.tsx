'use client';

import { useState } from 'react';
import { SubjectInput } from '@/lib/types';
import { SubjectForm } from '@/components/forms/SubjectForm';

interface BirthChartFormProps {
  onSubmit: (subject: SubjectInput) => void;
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

export function BirthChartForm({ onSubmit, loading = false }: BirthChartFormProps) {
  const [subject, setSubject] = useState<SubjectInput>(defaultSubject);

  return (
    <SubjectForm
      value={subject}
      onChange={setSubject}
      onSubmit={() => onSubmit(subject)}
      loading={loading}
      title="Thông Tin Sinh Nhật"
    />
  );
}

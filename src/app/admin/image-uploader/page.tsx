'use client';

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Ініціалізація клієнта Supabase
// Переконайтеся, що змінні середовища налаштовані у вашому .env.local
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ImageUploader: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      // 1. Створюємо унікальний шлях до файлу
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      // 2. Завантаження файлу в бакет 'project-images'
      const { error: uploadError } = await supabase.storage
        .from('projects-images') // ЗАМІНІТЬ НАЗВУ ВАШОГО БАКЕТУ
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 3. Отримання публічного URL
      const { data } = supabase.storage
        .from('projects-images')
        .getPublicUrl(filePath);

      setImageUrl(data.publicUrl);
      alert('Зображення успішно завантажено!');
    } catch (error: any) {
      alert('Помилка завантаження: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-2">Завантаження зображення проекту</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {uploading && <p className="mt-2 text-sm text-blue-600">Триває завантаження...</p>}
      
      {imageUrl && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700">Завантажено:</p>
          <img src={imageUrl} alt="Project" className="mt-2 max-h-40 rounded border" />
          <p className="mt-1 text-xs text-gray-400 break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
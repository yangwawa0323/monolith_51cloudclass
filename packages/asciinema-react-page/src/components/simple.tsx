import type { Value } from '@react-page/editor';
import Editor from '@react-page/editor';

import React, { useState } from 'react';
import cellPlugins from '../plugins/cellPlugins';
import PageLayout from './PageLayout';

const LANGUAGES = [
  {
    lang: 'en',
    label: 'English',
  },
  {
    lang: 'de',
    label: 'Deutsch',
  },
];

export default function SimpleEditor() {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <PageLayout >

      <Editor
        cellPlugins={cellPlugins}
        value={value}
        lang={LANGUAGES[0].lang}
        onChange={setValue}
        languages={LANGUAGES}
      />
    </PageLayout>
  );
}

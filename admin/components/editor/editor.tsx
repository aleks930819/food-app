'use client';

import React, { memo, useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './editor-tools';

type Props = {
  data?: OutputData;
  // eslint-disable-next-line no-unused-vars
  onChange(val: OutputData): void;
  holder: string;
};

const EditorBlock = ({ data, onChange, holder }: Props) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        data,
        async onChange(api) {
          const data = await api.saver.save();

          onChange(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="border  text-start prose max-w-full" />;
};

export default memo(EditorBlock);

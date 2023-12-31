import React, { useEffect, useMemo, useState } from 'react';
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { useLoaderData, useSubmit, useLocation } from 'react-router-dom';
import { debounce } from '@mui/material';

export default function Note() {
  const { note } = useLoaderData();
  const submit = useSubmit();
  const location = useLocation();
  const [editorState, setEditorState] = useState(() => {
      return EditorState.createEmpty()
  });

  const [rawHTML, setRawHTML] = useState(note.content);
  const [hasPendingChange, setHasPendingChange] = useState(false); 

  useEffect(() => {
    if (hasPendingChange) {
      debounceMemorized(rawHTML, note, location.pathname);
      setHasPendingChange(false);
    }
  }, [rawHTML, hasPendingChange, note, location.pathname]);
  
  const debounceMemorized = useMemo(() => {
    return debounce((rawHTML, note, pathname) => {
      if(rawHTML === note.content) return;

      submit({...note, content: rawHTML}, {
        method: 'post',
        action: pathname
      })
    }, 1000);
  }, []);

  useEffect(() => {
      const blocksFromHTML = convertFromHTML(note.content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    }, [note.id]);

  const handleOnChange = (e) => {
      setEditorState(e);
      setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
      setHasPendingChange(true); 
  };
  
  return (
      <Editor
          editorState={editorState}
          onEditorStateChange={handleOnChange}
          placeholder='Write something!'
      >

      </Editor>
  )
}
import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import styled from 'styled-components/macro'
import pencil from './pencil-alt.svg'
import ReactHtmlParser from 'react-html-parser'

export default function TextEditor() {
  const [editorContent, setEditorContent] = useState('')
  const [editNote, setEditNote] = useState('none')

  function handleEditorChange(editorContent) {
    setEditorContent(editorContent)
    console.log(editorContent)
  }
  function handlePencilClick() {
    setEditNote('block')
  }
  function handleExitClick() {
    setEditNote('none')
  }

  return (
    <>
      <EditorSection>
        <Notes>
          <NoteTitel>
            <h3>Notizen</h3>
            <StyledImage
              src={pencil}
              alt="edit note"
              onClick={handlePencilClick}
            ></StyledImage>
          </NoteTitel>
          <div>{ReactHtmlParser(editorContent)}</div>
        </Notes>
        <EditorWrapper style={{ display: editNote }}>
          <ButtonWrapper>
            <StyledButton onClick={handleExitClick}>x</StyledButton>
          </ButtonWrapper>
          <Editor
            textareaName="content"
            onEditorChange={handleEditorChange}
            apiKey="mctspfsm9cpr8op1vg9gpgwgdf00uwm1x1vaagv64g2132uc"
            init={{
              hidden_input: false,
              selector: 'textarea',
              forced_root_block: '',
              height: 240,
              menubar: false,
              plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help',
              paste_as_text: true,
              statusbar: false,
            }}
          />
        </EditorWrapper>
      </EditorSection>
    </>
  )
}
const EditorWrapper = styled.div`
  background: transparent;
`
const EditorSection = styled.section`
  margin: 12px;
`
const Notes = styled.section`
  margin-bottom: 10px;
`
const NoteTitel = styled.div`
  width: 100%;
  display: flex;
`
const StyledImage = styled.img`
  padding: 8px;
`
const StyledButton = styled.button`
  border: none;
  font-size: 20px;
  background: transparent;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`


import React, { useRef } from 'react'
import styled from 'styled-components'
import { Checkbox, Inline, Stack, TextInput } from "@construct-kit/core";

const CheckboxContainer = styled.div`
  border-bottom:1px solid #eee;
  display:flex;
  justify-content:space-between;
`

function ListItems(props) {
  const { list: { _id, name, isEdit, status }, delectItem, finished, changeToSave, changeToEdit } = props;
  const inputRef = useRef();
  const changeStatus = () => {
    finished(_id);
  }
  const deleted = () => {
    delectItem(_id);
  }

  const editDisplay = () => {
    changeToSave(_id);
  }

  const saveDisplay = () => {
    const txt = inputRef.current.value;
    changeToEdit(_id,txt);
  }

  return (
    <Stack inset="0.33rem" gap="small" key={_id}>
      <CheckboxContainer>
        {isEdit ?
          (<Checkbox label={name} checked={status} onChange={changeStatus} />) :
          (<TextInput ref={inputRef} label="" hideLabel defaultValue={name} ></TextInput>)
        }
        <Inline inset="0" gap="small" grow={false}>
          {isEdit ?
            (<button onClick={editDisplay} >edit</button>) :
            (<button onClick={saveDisplay}>save</button>)
          }
          <button onClick={deleted}>delete</button>
        </Inline>

      </CheckboxContainer>
    </Stack>
  )


}

export default ListItems;
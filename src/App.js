import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { ConstructKit, Box, H1 } from "@construct-kit/core";
import styled from 'styled-components'
import ListWrap from './components/ListWrap';
import AddItems from './components/AddItems';
import ChooseComponents from './components/ChooseComponent'
import { getList, addItems, deleteTodo, editTodo, setCompleted } from './graphql/index'


const Container = styled(Box)`
  padding: 1rem;
  background-color:#eee;
  width:50%;
`

const Title = styled(H1)`
  font-weight:bold
`

const LineWrap = styled(Box)`
  margin-bottom:1.5rem;
`

function App() {
  const [list, setList] = useState([]);


  const addToDo = async (item) => {
    let newList = await addItems(item.name);
    setList(newList.data.data.todoList);
  }

  const finished = (id) => {
    let olditems = [...list];
    olditems = olditems.map((item) => {
      if (item._id === id) {
        item.status = item.status === 0 ? 1 : 0;
      }
      return item
    })
    setList(olditems);

  }

  const delectItem = async (id) => {
    let newList = await deleteTodo(id);
    setList(newList.data.data.todoList);
  }

  const changeToSave = (id) => {
    let olditems = [...list];
    olditems = olditems.map((item) => {
      if (item._id === id) {
        item.isEdit = false;
      }
      return item
    })
    setList(olditems);
  }

  const changeToEdit = async (id, txt) => {
    let newList = await editTodo(id, txt);
    setList(newList.data.data.todoList);

  }

  const selectAll = (() => {
    let olditems = [...list];
    olditems = olditems.map((items) => {
      items.status = 1;
      return (items);
    })
    setList(olditems);
  })

  const selectNone = (() => {
    let olditems = [...list];
    olditems = olditems.map((items) => {
      items.status = 0;
      return (items);
    })
    setList(olditems);
  })

  const reverseSelect = (() => {
    let olditems = [...list];
    olditems = olditems.map((items) => {
      items.status = items.status === 0 ? 1 : 0;
      return (items);
    })
    setList(olditems);

  })

  const submit = async() => {
    let olditems = [...list];
    let ids = [];
    olditems.forEach((item) => {
      if (item.status === 1) {
        ids.push(item._id);
      }
    })
    let newList = await setCompleted(ids);
    setList(newList.data.data.todoList);
  }


  const fetchData = async () => {

    const result = await getList();
    setList(result.data.todoList);

  };
  
  useEffect(() => {
    fetchData();

  }, [])


  return (<div className="App">
    <header className="App-header">
      <ConstructKit>
        <Container>
          <Title>TO DO LIST</Title>
          <LineWrap>
            <ListWrap list={list}
              finished={finished}
              delectItem={delectItem}
              changeToSave={changeToSave}
              changeToEdit={changeToEdit}
            ></ListWrap>
          </LineWrap>
          <LineWrap>
            <AddItems
              list={list}
              addToDo={addToDo}>
            </AddItems>
          </LineWrap>
          <ChooseComponents
            selectAll={selectAll}
            selectNone={selectNone}
            reverseSelect={reverseSelect}
            submit={submit}
          ></ChooseComponents>
        </Container>
      </ConstructKit>
    </header>
  </div>)
}

export default App;

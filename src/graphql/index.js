import ApolloClient from "../apollo.config";
import gql from "graphql-tag";


const getList = async () => {
    return await ApolloClient.query({
        query: gql`
            {
                todoList {
                    _id,
                    name,
                    isEdit,
                    status,
                }
            }
        `
    });
};
const addItems = async name => {
    return await ApolloClient.mutate({
        variables: { name },
        mutation: gql`
            mutation add($name: String!) {
                data:addTodo(name: $name) {
                    success
                    todoList{
                        _id
                        name
                        status
                        isEdit
                    }
                }
            }
        `
    })
};
const deleteTodo = async ids => {
    return await ApolloClient.mutate({
        variables: { ids },
        mutation: gql`
            mutation delete($ids: [ID]!) {
                data:deleteTodo(_id: $ids) {
                    success
                    todoList{
                        _id
                        name
                        status
                        isEdit
                    }
                }
            }
        `
    })
};
const editTodo = async (id, name) => {
    return await ApolloClient.mutate({
        variables: { id, name },
        mutation: gql`
            mutation edit($id: ID!, $name: String!) {
                data:editTodo(_id: $id, name: $name) {
                    success
                    todoList{
                        _id
                        name
                        status
                        isEdit
                    }
                }
            }
        `
    })
};
const setCompleted = async (ids) => {
    return await ApolloClient.mutate({
        variables: { ids },
        mutation: gql`
            mutation setCompleted($ids: [ID]!) {
                data:setCompleted(_id: $ids) {
                    success
                    todoList{
                        _id
                        name
                        status
                        isEdit
                    }
                }
            }
        `
    });
};

export { getList, addItems, deleteTodo, editTodo, setCompleted }
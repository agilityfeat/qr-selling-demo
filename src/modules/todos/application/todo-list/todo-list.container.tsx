import React, { useEffect, useState } from 'react';
import { Todo as TodoDomain } from '@/modules/todos/domain/todo';
import { TodoListView } from '@/modules/todos/application/todo-list/todo-list.view';
import { getTodos } from '@/modules/todos/domain/todos.actions';
import { outputs } from '@/config/outputs';
import { Todo } from '@/modules/todos/application/todo';
import { mapToApplicationModel } from '@/modules/todos/application/todos.mapper';

export const TodoListContainer = function () {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorToGetTodos, setErrorToGetTodos] = useState<string>('');

  const getTodosCustom = async () => {
    try {
      const todosDomain: TodoDomain[] = await getTodos({
        todosOutput: outputs.todosOutput,
      });

      const todosmap: Todo[] = mapToApplicationModel(todosDomain);

      setTodos(todosmap);
      setErrorToGetTodos('');
    } catch (error: any) {
      setErrorToGetTodos(error.message);
    }
  };

  useEffect(() => {
    getTodosCustom();
  }, []);

  return (
    <TodoListView
      todos={todos}
      errorToGetTodos={errorToGetTodos}
      setTodos={setTodos}
    />
  );
};

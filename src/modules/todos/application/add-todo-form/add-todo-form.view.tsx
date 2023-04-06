import React from 'react';
import styles from './add-todo-form.module.scss';
import { Error } from '@/components/error/error';

interface Props {
	onSubmit: (event: any) => void
	todoTitle: string
	onChangeTodoTitle: (event: any) => void
	errorToAddTodo: string
}

export const AddTodoFormView = function ({
  onSubmit,
  todoTitle,
  onChangeTodoTitle,
  errorToAddTodo,
}: Props) {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        name="title"
        placeholder="Add todo"
        value={todoTitle}
        onChange={onChangeTodoTitle}
        required
      />

      <Error error={errorToAddTodo} />
    </form>
  );
};

import task from './task';
import addTask from './addlist';
import { renderTask, newDatas } from './render';
import './style/main.scss';
import { deleteTask, editTask, openTaskAdder } from './taskInterface';
import { completeTask } from './project';
completeTask();
deleteTask();
editTask();
openTaskAdder();

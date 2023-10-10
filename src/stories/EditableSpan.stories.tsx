import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {useState} from 'react';
import {EditableSpan} from "../EditableSpan";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
  title: 'TODOLISTS/EditableSpan',
  component: EditableSpan,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: '',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: {
      description: 'onChange description',
      action: 'onChange action'
    },
  },
  args: {
    value: 'value'
  }
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const EditableSpanStory: Story = {};

// export const TaskIsNotDoneStory: Story = {
//   args: {
//     task: {id: 'sdasdasd', title: 'JS', isDone: false},
//   }
// };
// const TaskExample = () => {
//
//   const [task, setTask] = useState<TaskType>({id: 'sdasdasd', title: 'JS', isDone: true});
//
//   return <Task changeTaskStatus={() => setTask({...task, isDone: !task.isDone})}
//                changeTaskTitle={(title) => setTask({...task, title})}
//                removeTask={action('removeTask action')}
//                task={task}
//                todolistId={'qwewqrwetw'}
//   />
//
// };
// export const TaskStory: Story = {
//   render: () => <TaskExample/>
// };




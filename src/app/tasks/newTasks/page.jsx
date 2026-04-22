import { createAnotherTask } from '@/lib/action';
import { Input, Label, TextField,Select, ListBox, Button, Form} from '@heroui/react';
import React from 'react';

const NewTasks = () => {
    return (
        <div className='w-1/4 mx-auto py-4'>
            <Form action={createAnotherTask} className="flex flex-col gap-4">
                <TextField
                 isRequired
                className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                </TextField>
                <TextField
                isRequired
                className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Write a Description" />
                </TextField>

                <Select name="priority" className="w-full" placeholder="Select one">
                    <Label>Priority</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="low" textValue="Low">
                                Low
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="medium" textValue="Medium">
                                Medium
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="high" textValue="High">
                                High
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select name="status" className="w-full" placeholder="Select one">
                    <Label>Status</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="pending" textValue="Pending">
                                Pending
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="progress" textValue="Progress">
                                Progress
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="completed" textValue="Completed">
                                Completed
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <TextField className="w-full" name="assignedTo">
                    <Label>AssignedTo</Label>
                    <Input placeholder="Project assignedTo" />
                </TextField>

              
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot='close' type="submit">Submit Task</Button>
           
            </Form>
        </div>
    );
};

export default NewTasks;
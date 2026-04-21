"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField,ListBox, Select } from "@heroui/react";

const AddPostModal = ({createAPost}) => {
    return (
         <Modal>
            <Button variant="secondary">Submit a Tasks</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createAPost} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="taskName" type="text">
                                        <Label>TaskName</Label>
                                        <Input placeholder="Enter your taskName" />
                                    </TextField>
                                    <TextField className="w-full" name="deadline" type="text">
                                        <Label>Deadline</Label>
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

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Submit Task</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddPostModal;
let latestId = 0;

export const todo = (task) => ({
    id: ++latestId,
    task,
    done: false,
});
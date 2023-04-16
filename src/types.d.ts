interface TodoType {
    id: string | number,
    task: string,
    isDone: boolean,
}

type ToggleFn = (item:TodoType) => void;

type AddFn = (text:string) => void;

type DelFn = (id:string | number) => void;
import { create } from 'zustand'

interface counterStateProps {
    value: number;
    a: string;
    addCounter: (a: number) => void;
    removeCounter: () => void;
}

const defaultState = {
    value: 0,
    a: 'hello',
}

const useCounterStore = create<counterStateProps>((set) => ({
    ...defaultState,
    addCounter: (a: number) => set(
        ({ value }) => ({
            value: value + a
        })
    ),
    removeCounter: () => set(
        () => ({
            a: 'toze'
        })
    ),
}))

export default useCounterStore;
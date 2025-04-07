import { create } from "zustand";

const texteditor = create((set) => ({
    open:false,
    toggle:()=>{
        set((state)=>({
            open:!state.open
        }))
    }
}));

export default texteditor;

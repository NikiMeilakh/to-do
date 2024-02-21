export const TODO="TODO";
export const ENT="ENT";

export const setToDo=(task)=>({
type:TODO,
payload: task,
})

export const setEnt=(text)=>({
      type: ENT,
    payload: text,

})


export  default function WithHoc(comp,others,hooks) {
    comp = JSON.parse(JSON.stringify(comp)) || {}
    let new_comp = {};

    // ['created',]
    if (!hooks) {
        new_comp = Object.assign(comp,others)
    } else {
        hooks.forEach(hook=>{
            comp[hook] = others[hook]
        })
        new_comp = comp
    }


}

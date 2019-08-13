
export  default function WithHoc(comp,others) {

    if (others.hasOwnProperty('render')){
        return ;
    }
    return {
        ...others,
        render(h){
            const slots = Object.keys(this.$slots)
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => {
                    vnode.context = this._self
                    return vnode
                })
            return h(comp, {
                on: this.$listeners,
                props: this.$data,
                scopedSlots: this.$scopedSlots,
                attrs: this.$attrs
            }, slots)
        }
    }
}

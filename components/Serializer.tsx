

const Serializer = {
    types :{
        block: props =>{
            if (props.node.type === 'paragraph') {
                return <p>{props.children}</p>
            }
        }
    }
}
const destination = {
    name: "destination",
    title: "Destinations",
    type:'document',

    fields:[
        {
            name: 'name',
            title:'Name',
            type:'string'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{ source:'name', maxLength:96}
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{ hotspot: true },
            fields:[
                {
                    name:"alt",
                    title:"Alt",
                    type:"string"
                }
            ]
        },
        {
            name:'content',
            title: 'Content',
            type: 'string'
        },
        {
            name :'price',
            title: 'Price',
            type: 'number'
        },
        {
            name:'description',
            title: 'description',
            type: 'array',
           of: [{type : 'block'}]
        },
        {
            name:'includes',
            title : 'includes',
            type: 'array',
            of:[{type : 'block'}]
        }
    ]
}

export default destination;
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
            name:'description',
            title: 'Short Description',
            type: 'string'
        },
        {
            name :'price',
            title: 'Price  Per Day/Trip/Night',
            type: 'number'
        },
        {
            name:'includes',
            title :'Describe what is icluded (e.g Accommodation,transportation etc)',
            type: 'array',
            of:[{type : 'block'}]
        }
    ]
}

export default destination;
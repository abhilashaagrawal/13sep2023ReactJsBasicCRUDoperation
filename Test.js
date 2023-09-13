let requiredobj=  [
    {
        id: 1,
        name: "Ashi",
        createdAt: "12343445454"
    },
    {
        id: 2,
        name: "Priti",
        createdAt: '655565'
    }
]
let oldobj=[
    {
        "id": 1,
        "attributes": {
            "name": "Ashi",
            "createdAt": "2023-09-13T12:30:07.047Z",
            "updatedAt": "2023-09-13T12:30:09.581Z",
            "publishedAt": "2023-09-13T12:30:09.567Z"
        }
    },
    {
        "id": 2,
        "attributes": {
            "name": "Divya",
            "createdAt": "2023-09-13T12:30:41.197Z",
            "updatedAt": "2023-09-13T12:30:42.601Z",
            "publishedAt": "2023-09-13T12:30:42.594Z"
        }
    },
    {
        "id": 6,
        "attributes": {
            "name": "Pallavi",
            "createdAt": "2023-09-13T12:48:12.453Z",
            "updatedAt": "2023-09-13T12:48:14.059Z",
            "publishedAt": "2023-09-13T12:48:14.050Z"
        }
    },
    {
        "id": 8,
        "attributes": {
            "name": "Priti",
            "createdAt": "2023-09-13T12:51:27.100Z",
            "updatedAt": "2023-09-13T12:51:27.100Z",
            "publishedAt": "2023-09-13T12:51:27.097Z"
        }
    },
    {
        "id": 9,
        "attributes": {
            "name": "Dipa",
            "createdAt": "2023-09-13T12:52:30.685Z",
            "updatedAt": "2023-09-13T12:52:30.685Z",
            "publishedAt": "2023-09-13T12:52:30.678Z"
        }
    }
]
console.log('Before->' ,oldobj);

let newobj=oldobj.map((cv,index,arr)=>{
    return   {
        id: cv.id,
        name: cv.attributes.name,
        createdAt: cv.attributes.createdAt
    }
})
console.log("after ->", newobj);
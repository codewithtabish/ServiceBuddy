import { request, gql } from 'graphql-request'

const MasterUrl="https://api-ap-south-1.hygraph.com/v2/clt02l81v0otc07w7gpg106jk/master"


export const getSliders=async()=>{

    try {
        const query = gql`
        query Sliders {
         sliders {
       publishedAt
       updatedAt
         name
          id
       image {
      url(transformation: {document: {}, image: {resize: {}}})
    }
  }
}
 `
 

   const response=await await request(MasterUrl, query)
   return response
        
    } catch (error) {
        
    }
}
export const getCategories=async()=>{

    try {
    
        const query=gql`
        query GetCategory {
  categories {
    publishedAt
    updatedAt
    name
    id
    icon {
      url
    }
  }
}
        `

 
 
 

   const response= await request(MasterUrl, query)
   return response
        
    } catch (error) {
        
    }
}




export const businnessQueryData=async()=>{

    try {
    
        const query=gql`
    query GetBusinessList {
  businessLists {
    id
    name
    about
    contactPerson
    email
    createdAt
    category {
      id
      name
    }
    
    images {
      id
      url
      width
    }
  }
}

        `


   const response= await request(MasterUrl, query)
   return response
        
    } catch (error) {
        
    }
}



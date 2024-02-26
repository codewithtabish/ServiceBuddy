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



export const businessByCategory=async(category)=>{
    try {
        const query=gql`
        query GetBusinessList {
  businessLists(where:{category:{name:"`+category+`"}}) {
    id
    name
    about
    contactPerson
    email
    address
    createdAt
    
    images{
      id
      url
    }
    category{
      id
      name
    }
  
  }
}

        `

        const response=await request(MasterUrl,query)
        return response
        
    } catch (error) {
        
    }
}


export const createBokkingMutation=async(data)=>{

  try {
    const mutation=gql`
  mutation createBooking {
  createBooking(
    data: {userName: "`+data.userName+`", userEmail: "`+data.userEmail+`", date: "`+data.date+`", time: "`+data.time+`",
     bookingStatus: Booked,
      business: {connect: {id: "`+data.businessItemId+`"}}}
  ) {
    id
  }
  publishManyBookings(to: PUBLISHED) {
    count
  }
}



`
// publishBooking(where:{id:"`+data.businessItemId+`"})
   const response=await request(MasterUrl,mutation)
        return response
    
  } catch (error) {
    console.log("The create Booking mutation error is",error)
  }
  
}

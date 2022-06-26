export const post =(posts=[], action)=>{
   switch(action.type){
       case 'FETCH_ALL':
            return action.payload;
       case 'CREATE':
            return [...posts,action.payload];
      
       default:
        return posts;

   }
}

export const login=(logins=[],action)=>{
     switch(action.type){
          case 'LOGIN':
               return [...logins, action.payload]
          case 'REGISTER':
               return[...logins, action.payload];
          case 'AUTH_ERROR':
               return[{...logins, auther:action.payload.error}]
          case 'AGE':
               return[...logins,action.payload]
          default:
               return logins
          
          }
}
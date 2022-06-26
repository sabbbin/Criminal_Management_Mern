import {PostMessage, LoginSchema} from "../models/postmessage.js"


import {PythonShell} from 'python-shell';

export const getPosts = async(req,res)=>{

  try{
      const postMessage=await PostMessage.find();
        res.status(200).json(postMessage)
  }catch(error){
        res.status(404).json({message:error.message});
  }
}

export const predictAge=(req,res)=>{
  

    try{
        const age=req.body;
   
       console.log('hel')
       
        let options={
            scriptPath:'D:/react/server/Deeplearn/agepred/',
            args:age
        }
    
       
            PythonShell.run('agepredict.py',options, function (err,result) {
            if (err) {
                console.log(err)
            }
            console.log('finished');
            if (result) {
                console.log(result)
                res.status(200).json(age)
            }
            });
          
            // res.status(200).json(age)
    }
    catch(error){
      
        res.status(404).json({message:error.message})
    }
}

export const createPost=async(req, res)=>{

   
    const post = req.body;
   
    const newPost= new PostMessage(post);
   console.log('hell')
    try{
        await newPost.save();
        res.status(201).json(newPost)
    }
    catch(error){
        res.status(409).json({message:error.message})

    }
}

export const loginPost=async(req,res)=>{
    console.log('he')
    const { officerId, officerpassword}= req.body
    const user= await LoginSchema.findOne({officerId:officerId})
    try{
        if (user){
            if(user.officerpassword===officerpassword){
                res.send({user:user.officerId})
            }else{
                res.send({message:'username or password invalid'})
            }
        }else{
            res.status(200).json({message:'username or password invalid'})
        }
        // const postlogin=await LoginSchema.find(officerId);
        //   res.status(200).json(postlogin)
    }catch(error){
          res.status(404).json({message:error.message});
    }

}

export const createRegister=async(req,res)=>{
    const {officerId,officerpassword,officerconformpass}=req.body
    const post= req.body;
    try{
        const loginpost=await LoginSchema.findOne({officerId:officerId});
        if (loginpost){
            res.send({message:'user already exist'})
        }else{
            const newLogin= new LoginSchema(post);
            await newLogin.save();
        res.status(201).json(newPost)
        }
    }
    catch(error){
        res.status(404).json({message:error.message});   
    }
}


const User = require('../models/user-model');

const getAllUsers = async( req,res,next) =>{
    let users;
    try {
      users = await User.find();
    } catch (error) {
      console.log(error);
    }
  
    if(!users)
      return res.status(404).json({message:"No products found"}) 
  
    return res.status(200).json({users})
}

const getbyId = async (req,res,next)=>{
  const id = req.params.id;
  let user;

  try {
      user = await User.findById(id);
  } catch (error) {
      console.log(error)
  }

  if(!user)
    return res.status(404).json({message:"No user found"}) 

  return res.status(200).json({user})

}

const createUser = async (req,res,next) =>{
    const {nome_user , email_user, tipo_user, senha_user} = req.body
    let user;
    try{
        user = new User({
            nome_user,
            email_user,
            tipo_user,
            senha_user
        });
        await user.save();
    }catch(err){
        console.log(err)
    }

    if(!user){
        return res.status(500).json({message:'Unable to add'})
    }

    return res.status(201).json({user})
}

const updateUser = async (req,res,next) =>{
  const id = req.params.id;

  const {nome_user , email_user, tipo_user, senha_user} = req.body
  let user;

  try {
      user = await User.findByIdAndUpdate(id,{
          nome_user,
          email_user,
          tipo_user,
          senha_user
      })
      user = await  user.save();
  } catch (error) {
      console.log(error);
  }

  if(!user){
      return res.status(500).json({message:'Unable to update user with id'})
  }

  return res.status(200).json({user})
}

const deleteUser = async(req,res,next) =>{
  const id = req.params.id;
  let user;

  try {
      user = await User.findByIdAndRemove(id);
  } catch (error) {
      console.log(error)
  }

  if(!user){
      return res.status(404).json({message:'Unable to delete user with id'})
  }

  return res.status(200).json({message:'user successfully delete!'})
}

exports.getAllUsers = getAllUsers;
exports.getbyId = getbyId;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

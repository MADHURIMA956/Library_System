const post = (model) => async (req,res) => {
    try{
        const items = await model.create(req.body);
        return res.status(201).send(items);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getAll = (model) => async (req,res) => {
    try{
        const items = await model.find().lean().exec();
        return res.send(items);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getOne = (model) => async (req,res) =>  {
    try{
        const items = await model.find().lean().exec();
        return res.send(items);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getWithOnePopulate = ( model , populate1  ) => async (req,res) => {
    try{
        const items = await model.find().populate(populate1).lean().exec();
        return res.send(items);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getWithTwoPopulate = ( model , populate1 ,populate2 ) => async (req,res) => {
    try{
        const items = await model.find().populate(populate1).populate(populate2).lean().exec();
        return res.send(items);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const updateOne = (model) => async (req, res) => {
    try {
      const item = await model
        .findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
        .lean()
        .exec();
  
      return res.status(201).send(item);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  };
  
  const deleteOne = (model) => async (req, res) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(item);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  };
  
  module.exports = {
      post ,
      getAll,
      getOne,
      getWithOnePopulate,
      getWithTwoPopulate,
      updateOne,
      deleteOne,

  }
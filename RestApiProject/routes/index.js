const express=require("express");
const { model } = require("mongoose");

const router=express.Router();

const { Employee}= require('../models/employee');

//getting all the employees

router.get('/api/employees',(req,res)=>{
    Employee.find({}, (err,data)=>
    {
if(!err)
{
    res.send(data);
}else{
    console.log(err);
}
    });
});

// Get Single Employee

router.get('/api/employee/:id', (req, res) => {
    fs.mkdirSync("akhiill");
    console.log("created");
});


// Update Employee

router.put('/api/employee/edit/:id', (req, res) => {


    const emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee Updated Successfully', updateEmployee: data})
        } else {
            console.log(err);
        }
    });
});

//saving employees
router.post('/api/employee/add',(req,res)=>
{
    try{
        fs.mkdirSync("akhiill");
        console.log("created");
    
      }
      catch(err)
      {
        if(err.code=='EEXISTS')
        {
          console.log("exists");
        }
        else{
          console.log(err);    }
      }


    emp.save((err,data)=>
    {
        res.status(200).json({ code:200,message:'emp added',
    addEmployee:data})

    });
});

module.exports=router;
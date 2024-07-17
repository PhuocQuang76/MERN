
let express = require("express");
const nodemailer = require('nodemailer');


let adminRouter = express.Router({});
let hospitalDataModel = require("../DataModels/hospitalDataModel");
let vaccineDataModel = require("../DataModels/VaccineDataModel");
const AuthDataModel = require("../DataModels/authDataModel");
const registerDataModel = require("../DataModels/registerDataModel");

//Using async await
adminRouter.post("/addVaccine", async (req, res) => {
    try {
        console.log("requestBody: " + req.body.name);
        let newVaccineData = req.body;
        let { name } = req.body;

        let vaccine = await vaccineDataModel.findOne({ name: name });

        if (!vaccine) {
            console.log("vaccine not found. Creating a new vaccine.");

            //create a new instance of the HospitalModel then save
            const newVaccine = new vaccineDataModel(newVaccineData);
            await newVaccine.save();
            res.status(200).json(newVaccine);
        } else {
            console.log("vaccine found.");
            res.status(422).json({ message: "vaccine already existed." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

adminRouter.get("/getAllVaccines", async (req, res) => {
    try {
        const vaccines = await vaccineDataModel.find();
        if (vaccines.length > 0) {
            res.status(200).json(vaccines);
        } else {
            res.status(404).json({ message: 'Vaccines not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

adminRouter.get("/getByVaccineId/:vaccineId", async (req, res) => {
    const vaccineId = req.params.vaccineId;
    console.log("VaccineId:" + vaccineId);
    try {
        const vaccineFound = await vaccineDataModel.findOne({ _id: vaccineId });
        if (vaccineFound) {
            console.log("VaccineId found", vaccineFound);
            res.status(200).json(vaccineFound);
        } else {
            console.log("VaccineId not found");
            res.status(404).json({ message: 'Vaccine not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//Using async await
adminRouter.post("/addHospital", async (req, res) => {
    try {
        console.log("requestBody: " + req.body.name);
        let newHospitalData = req.body;
        let { name } = req.body;

        let hospital = await hospitalDataModel.findOne({ name: name });

        if (!hospital) {
            console.log("hospital not found. Creating a new hospital.");

            //create a new instance of the HospitalModel then save
            const newHospital = new hospitalDataModel(newHospitalData);
            await newHospital.save();
            res.status(200).json(newHospital);
        } else {
            console.log("Hospital found.");
            res.status(422).json({ message: "Hospital already existed." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
adminRouter.get("/getAllHospitals", async (req, res) => {
    try {
        const hospitals = await hospitalDataModel.find();
        if (hospitals.length > 0) {
            res.status(200).json(hospitals);
        } else {
            res.status(404).json({ message: 'hospitals not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

adminRouter.get("/getByHospitalId/:hospitalId", async (req, res) => {
    const hospitalId = req.params.hospitalId;
    console.log("hospitalId:" + hospitalId);
    try {
        const hospitalFound = await hospitalDataModel.findOne({ _id: hospitalId });
        if (hospitalFound) {
            console.log("hospitalId found", hospitalFound);
            res.status(200).json(hospitalFound);
        } else {
            console.log("hospitalId not found");
            res.status(404).json({ message: 'hospital not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

adminRouter.get("/getUsers", async(req,res) => {

    try{
        // Fetch all users from the User model
        const users = await AuthDataModel.find();
        // Return the users in the response
        res.json(users);

    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

adminRouter.get("/getRegisteredByStatus/:status", async (req, res) => {
    const status = req.params.status;
    console.log("status: " + status);
    try {
        const registeredData = await registerDataModel.find();
        const filteredItems = registeredData.reduce((acc, curr) => {
            curr.items.forEach((item, index) => {
                if (item.status === status) {
                    acc.push({ _id: curr._id, userId: curr.userId, itemIndex: index, item });
                }
            });
            return acc;
        }, []);

        console.log("filteredItems:"+filteredItems);
        res.json(filteredItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



adminRouter.patch('/statusUpdate',async (req,res) => {
   console.log("check");
    try{
        const {userId, itemIndex, updateStatus, currentStatus} = req.body;
        console.log("userId:"+userId);
        console.log("itemIndex:"+itemIndex);
        console.log("updateStatus:"+updateStatus);

        const updateRegister = await registerDataModel.findOne({userId});

        if (!updateRegister) {
            return res.status(404).json({ error: 'Not found the register' });
        }

        const updateItem = updateRegister.items[itemIndex];
        updateItem.status = updateStatus;

        updateRegister.items[itemIndex] = updateItem;

        await updateRegister.save();

        //get all register by status
        const registeredData = await registerDataModel.find();
        const filteredItems = registeredData.reduce((acc, curr) => {
            curr.items.forEach((item, index) => {
                if (item.status === currentStatus) {
                    acc.push({ _id: curr._id, userId: curr.userId, itemIndex: index, item });
                }
            });
            return acc;
        }, []);
        res.status(200).json(filteredItems);

    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


adminRouter.post('/sendEmail', async(req,res) => {
    const {email} = req.body;
    console.log("email:" + email);
    const {emailObj} = req.body;
    console.log("hosptal:" + emailObj.hospital)
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'adrien.robel@ethereal.email ',
            pass: 'n5yckRqz4HnDg1Mygq'
        }
    });

    // Define email options
    // Define email options with both text and HTML content
    const msg = {
        from: '"NVAC CARE" <theExpressApp@example.com>',
        to: email,
        subject: "Vaccine Register Confirmation",
        text: "Appointment Details", // Plain text body
        html: `<h4>Hi Mr/Mrs ${emailObj.userName}</h4>
                <p>Thank you for your vaccine registration.</p>
                <p>Your appointment at ${emailObj.hospital}</p>
                <p>Date: ${emailObj.date}</p>
                <p>Time: ${emailObj.time}</p>
                

                <br></br>
                <p>Best regards</p>
                <p>Nvac care service center</p>` // HTML content
    };

    

    // Send the email
    transporter.sendMail(msg, (error, info) => {
        if (error) {
            console.log('Error occurred: ' + error.message);
            res.status(500).json({ error: 'email send error' });;
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

         // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    res.status(200).json({message:'Email sent!'});
})

module.exports = adminRouter;
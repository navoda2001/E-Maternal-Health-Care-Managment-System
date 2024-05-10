const router = require('express').Router();
let appointment_Schema = require('../models/appointment');

router.route('/addAppointment').post((req, res) => {
    const uniqueId = req.body.uniqueId;
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const nIC = req.body.nIC;
    const date = req.body.date;
    const doctor = req.body.doctor;
    const time = req.body.time;               
    const status = req.body.status;

    const appointment = new appointment_Schema({  uniqueId, name, email, phoneNo, nIC, date, doctor, time, status });
    
    appointment.save()
        .then(() => res.json('Appointment Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/updateAppointment/").put(async (req, res) => {
    const { uniqueId, name, email, phoneNo, nIC, date, doctor, time, status } = req.body;

    const appointment = {
        uniqueId, name, email, phoneNo, nIC, date, doctor, time, status
    }
    const update = await appointment_Schema.findOneAndUpdate({ uniqueId: uniqueId }, appointment).then(() => {
        res.status(200).send({ status: "Appointment Updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Data", error: err.message });
    });
});

router.route("/deleteAppointment/:uniqueId").delete(async (req, res) => {
    let uniqueId = req.params.uniqueId;

    appointment_Schema.findOneAndDelete({ uniqueId: uniqueId })
        .then(() => {
            res.status(200).send({ status: "Appoiment Deleted" });

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Deleting Data", error: err.message });
        });
});

router.route("/allappointment").get(async (req, res) => {
    appointment_Schema.find()
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json('No Data'))
});

router.route("/allappointment/:email").get(async (req, res) => {
    const email = (req.params.email)
    appointment_Schema.find({ email: email })
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json('No Data'))
});

router.route("/allappointmentdc/:doctor").get(async (req, res) => {
    const doctor = (req.params.doctor)
    appointment_Schema.find({ doctor: doctor })
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json('No Data'))
});


module.exports = router;
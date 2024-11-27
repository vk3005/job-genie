import mangoose from 'mongoose';

const jobSchema = new mangoose.Schema({
    company : {
        type : String,
        required :[true, 'Company name is required']
    },
    position : {
        type : String,
        required :[true, 'Job Position is required'],
        minlength :100
    },
    status : {
        type : String,
        enum : ['pending','interview', 'reject', 'accepted'],
        default : 'pending'
    },
    workType : {
        type : String,
        enum : ['full-time','part-time', 'contract', 'intership'],
        default : 'full-time'
    },
    workLocation : {
        type : String,
        required :[true, 'Work location is required'],
        default : 'Bangalore'
    },
    salary : {
        type : Number,
        required :[true, 'Salary is required']
    },
    createdBy : {
        type : mangoose.Types.ObjectId,
        ref : 'User'
    },

}, {timestamps : true}
);

export default mangoose.model('Job', jobSchema);